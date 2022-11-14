//Task 1
const http = require("http");
const os = require('node:os');
const path = require('path');
const port = 5001;

const server = http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write(`System information\n`);
    response.write(`Current user name: ${os.userInfo().username}\n`);
    response.write(`OS type: ${os.type} ${os.arch()}\n`);
    response.write(`System work time: ${(os.uptime()/60).toFixed(2)} minutes\n`);
    response.write(`Current work directory: ${path.dirname(__filename)}\n`);
    response.end(`Server file name: ${path.basename(__filename)}\n`);
  });

server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

 

 