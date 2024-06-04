const http = require("node:http");

const agent = new http.Agent({keepAlive: true});

const request = http.request({
  agent: agent,
  hostname: 'localhost',
  port: 8050,
  method: 'POST',
  path: '/create-post',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(JSON.stringify({message: 'Hello World!'}), 'utf-8'),
  }
});

// Response Event is emitted only once
request.on('response', response => {

});

request.write(JSON.stringify({message: 'Hello World!'}));
request.write(JSON.stringify({message: 'Hi in Request!'}));
request.write(JSON.stringify({message: 'Hello from Client-Side!'}));

request.end(JSON.stringify({message: 'Last message from Client'}));
