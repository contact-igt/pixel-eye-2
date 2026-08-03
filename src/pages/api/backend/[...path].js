import config from "@/lib/config";

export default async function handler(req, res) {
  const path = `/${(req.query.path || []).join("/")}`;
  if (!path.startsWith("/public/")) return res.status(404).json({ success: false, message: "Not found" });

  const query = new URLSearchParams(req.query);
  query.delete("path");
  const configuredBase = typeof config.api.base === 'string' ? config.api.base.trim() : '';
  const base = configuredBase.startsWith('http://') || configuredBase.startsWith('https://') ? (configuredBase.endsWith('/') ? configuredBase.slice(0, -1) : configuredBase) : 'http://localhost:5000/api/v1';
  const target = `${base}${path}${query.toString() ? `?${query}` : ""}`;

  try {
    const headers = {};
    if (req.headers["content-type"]) headers["Content-Type"] = req.headers["content-type"];
    if (req.headers.cookie) headers.Cookie = req.headers.cookie;
    const response = await fetch(target, { method: req.method, headers, ...(req.method === "GET" || req.method === "HEAD" ? {} : { body: JSON.stringify(req.body || {}) }) });
    const body = await response.text();
    res.status(response.status);
    const contentType = response.headers.get("content-type");
    if (contentType) res.setHeader("Content-Type", contentType);
    return res.send(body);
  } catch (error) {
    console.error("[backend proxy] request failed:", error);
    return res.status(502).json({ success: false, message: "Backend unavailable" });
  }
}