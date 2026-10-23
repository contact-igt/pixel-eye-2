import { sendToGoogleSheets } from "@/lib/sheets";

const getClientIpAddress = (req) => {
  const forwardedFor = req.headers["x-forwarded-for"];
  const forwardedIp = Array.isArray(forwardedFor)
    ? forwardedFor[0]
    : forwardedFor?.split(",")[0]?.trim();
  const realIp = req.headers["x-real-ip"];

  return forwardedIp || (Array.isArray(realIp) ? realIp[0] : realIp) || req.socket?.remoteAddress || null;
};

const syncAppointmentToInvictus = async (data, attribution, ipAddress) => {
  const apiBaseUrl = process.env.INVICTUS_API_URL?.trim();
  const clientKey = process.env.INVICTUS_PIXELEYE_CLIENT_KEY?.trim();

  if (!apiBaseUrl || !clientKey) {
    console.warn("[Invictus CRM mirror] sync skipped: server configuration is missing.", {
      form: "Appointments",
    });
    return "skipped";
  }

  const endpoint = `${apiBaseUrl.replace(/\/+$/, "")}/pixeleye/website-leads/appointment-register`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Client-Key": clientKey,
      },
      body: JSON.stringify({
        form_name: "Appointments",
        lead_type: "appointment_enquiry",
        data,
        attribution: attribution || null,
        ip_address: ipAddress,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      // Do not log request data or credentials: appointment data is personal data.
      console.error("[Invictus CRM mirror] sync failed.", {
        form: "Appointments",
        status: response.status,
        statusText: response.statusText,
      });
      return "failed";
    }

    return "synced";
  } catch (error) {
    // The CRM is a best-effort mirror; Google Sheets remains the operational destination.
    console.error("[Invictus CRM mirror] request failed.", {
      form: "Appointments",
      errorName: error?.name || "UnknownError",
    });
    return "failed";
  } finally {
    clearTimeout(timeout);
  }
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { form, data, attribution } = req.body || {};
    if (!form || !data) {
      return res.status(400).json({ error: "Missing form or data" });
    }

    const result = await sendToGoogleSheets(form, data);

    if (
      !result ||
      result.ok === false ||
      (result.response && result.response.success === false)
    ) {
      const message =
        result?.message ||
        result?.response?.message ||
        "Failed to save to Google Sheets";
      console.error("Sheets error:", message, result);
      return res.status(502).json({ error: message, result });
    }

    // Invictus mirrors PixelEye appointment leads; Google Sheets remains the existing operational destination.
    const invictusSync = form === "Appointments"
      ? await syncAppointmentToInvictus(data, attribution, getClientIpAddress(req))
      : "skipped";

    return res.status(200).json({ ok: true, success: true, result, invictusSync });
  } catch (err) {
    console.error("Form submit error", err);
    return res.status(500).json({ error: err?.message || "Server error" });
  }
}
