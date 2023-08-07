import http from 'http';
import getPort from 'get-port';

// Create a simple HTTP server that returns "Hello, World!" on the response
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

// Get an available random port and start the server
getPort().then((port) => {
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
