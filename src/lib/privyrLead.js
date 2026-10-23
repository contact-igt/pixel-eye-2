const PRIVYR_SOURCE = "Pixel Eye Hospital";

const normalizeIndianMobile = (phone = "") => {
  const digits = String(phone).replace(/\D/g, "");
  return `+91${digits.slice(-10)}`;
};

export async function submitPrivyrLead({ name = "", phone = "", email = "" } = {}) {
  const endpoint = process.env.NEXT_PUBLIC_PRIVYR_LEAD_URL?.trim();

  if (!endpoint) {
    console.warn("[Privyr] lead sync skipped: NEXT_PUBLIC_PRIVYR_LEAD_URL is not configured.");
    return { ok: false };
  }

  const customerName = String(name).trim();
  const payload = {
    name: customerName,
    phone: normalizeIndianMobile(phone),
    // email: String(email).trim(),
    display_name: customerName,
    source: PRIVYR_SOURCE,
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("[Privyr] lead sync failed.", {
        status: response.status,
        statusText: response.statusText,
      });
      return { ok: false };
    }

    return { ok: true };
  } catch (error) {
    console.error("[Privyr] lead sync request failed.", {
      errorName: error?.name || "UnknownError",
    });
    return { ok: false };
  }
}
