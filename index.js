const express = require('express');
const http = require('http');
const app = express();
const port = 3000;

// Express routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

// Create HTTP server using Express app
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

