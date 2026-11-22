"use strict";
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const port = Number(process.env.PORT) || 10000;
const index = fs.readFileSync(path.join(__dirname, "public", "index.html"));

const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, "http://localhost").pathname;
  const headers = {
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "no-referrer"
  };
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { ...headers, Allow: "GET, HEAD" });
    res.end();
    return;
  }
  if (pathname === "/healthz") {
    const body = JSON.stringify({ status: "ok", name: "FLAG BATTLE LIVE", uptimeSeconds: Math.round(process.uptime()) });
    res.writeHead(200, { ...headers, "Content-Type": "application/json; charset=utf-8" });
    res.end(req.method === "HEAD" ? undefined : body);
    return;
  }
  if (pathname === "/api/status") {
    const body = JSON.stringify({
      name: "FLAG BATTLE LIVE",
      mode: "demo",
      tiktokConnected: false,
      streaming: false,
      message: "Demo only: no TikTok comments or gifts are connected yet."
    });
    res.writeHead(200, { ...headers, "Content-Type": "application/json; charset=utf-8" });
    res.end(req.method === "HEAD" ? undefined : body);
    return;
  }
  if (pathname === "/") {
    res.writeHead(200, { ...headers, "Content-Type": "text/html; charset=utf-8" });
    res.end(req.method === "HEAD" ? undefined : index);
    return;
  }
  res.writeHead(404, { ...headers, "Content-Type": "text/plain; charset=utf-8" });
  res.end(req.method === "HEAD" ? undefined : "Not found");
});
server.requestTimeout = 15_000;
server.listen(port, "0.0.0.0", () => console.log("FLAG BATTLE LIVE preview listening on " + port));
const shutdown = () => server.close(() => process.exit(0));
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
