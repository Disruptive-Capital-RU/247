const { createServer } = require("http");
const { parse } = require("url");
const { join } = require("path");
const fs = require("fs");

const server = createServer((req, res) => {
  const parsedUrl = parse(req.url, true);
  const { pathname } = parsedUrl;

  // Serve static files from the frontend/build directory
  const staticPath = join(process.cwd(), "frontend/build", pathname);

  // If file exists, serve it
  if (fs.existsSync(staticPath) && fs.statSync(staticPath).isFile()) {
    const contentType = getContentType(staticPath);
    res.writeHead(200, { "Content-Type": contentType });
    fs.createReadStream(staticPath).pipe(res);
    return;
  }

  // For any other route, serve index.html (for client-side routing)
  const indexPath = join(process.cwd(), "frontend/build", "index.html");
  if (fs.existsSync(indexPath)) {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(indexPath).pipe(res);
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

// Helper to determine content type based on file extension
function getContentType(path) {
  const ext = path.split(".").pop().toLowerCase();
  const types = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    json: "application/json",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    svg: "image/svg+xml",
    ico: "image/x-icon",
  };
  return types[ext] || "text/plain";
}

module.exports = server;
