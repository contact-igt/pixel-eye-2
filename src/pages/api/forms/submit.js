import { sendToGoogleSheets } from "@/lib/sheets";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { form, data } = req.body || {};
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

    return res.status(200).json({ ok: true, result });
  } catch (err) {
    console.error("Form submit error", err);
    return res.status(500).json({ error: err?.message || "Server error" });
  }
}
