// Sends form data to a Google Apps Script Web App (or falls back to a dummy).
// Configure the target URL in your environment as `GAS_WEBHOOK_URL`.
export async function sendToGoogleSheets(formName, data) {
  const GOOGLE_APPS_SCRIPT_URL =
    process.env.GOOGLE_APPS_SCRIPT_URL;

  if (!GOOGLE_APPS_SCRIPT_URL) {
    console.warn("GOOGLE_APPS_SCRIPT_URL is not configured - falling back to dummy.", {
      formName,
      data,
    });
    return {
      ok: false,
      message: "GAS_WEBHOOK_URL not configured",
      debug: { formName, data },
    };
  }

  try {
    // Send a wrapper with form name + data so the Apps Script can handle either shape.
    const payload = { form: formName, data };
    const resp = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await resp.text();
    let json;
    try {
      json = JSON.parse(text);
    } catch (e) {
      json = { raw: text };
    }

    if (!resp.ok) {
      return {
        ok: false,
        status: resp.status,
        message: json?.message || `GAS responded with ${resp.status}`,
        body: json,
      };
    }

    // If the Apps Script returns a JSON object with a `success` boolean,
    // treat `success: false` as a failure so the API can surface it.
    if (
      json &&
      typeof json === "object" &&
      Object.prototype.hasOwnProperty.call(json, "success")
    ) {
      if (!json.success) {
        return {
          ok: false,
          status: resp.status,
          message: json.message || "GAS reported failure",
          body: json,
        };
      }
    }

    return { ok: true, response: json };
  } catch (err) {
    console.error("Error sending to Google Apps Script:", err);
    throw err;
  }
}

export default sendToGoogleSheets;
