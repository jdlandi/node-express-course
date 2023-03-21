const http = require('http');

const server = http.createServer();








// const server = http.createServer((req, res) => {
//   res.end('Welcome');
// });

server.on('request', (req, res) => {
  res.end('Welcome');
});

server.listen(8082);
