const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/health") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      status: "healthy",
      service: "devops-aws-assignment"
    }));
  }

  res.writeHead(200);
  res.end(JSON.stringify({
    message: "DevOps AWS Assignment API is running",
    endpoints: ["/", "/health"]
  }));
});

server.listen(3000, () => {
  console.log("Application running on port 3000");
});
