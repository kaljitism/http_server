const http = require('node:http');

const server = http.createServer();

server.listen(8050, 'localhost', () => {
  console.log(`Server listening on http://localhost:8050`);
});

server.on('request', (request, response) => {
  console.log('------- METHODS -------');
  console.log(`Method:`, request.method);
  
  console.log('------- HEADERS -------');
  console.log(`Method:`, request.headers);
  
  console.log('------- NAME -------');
  console.log(`Name:`, request.name);
  
  console.log('------- URL -------');
  console.log(`URL:`, request.url);
  
  console.log('------- HTTP VERSION -------');
  console.log(`Version:`, request.httpVersion);
  
  console.log('------- ARGUMENTS -------');
  console.log(`Arguments:`, request.arguments);
  
  console.log('------- CALLER -------');
  console.log(`Caller:`, request.caller);
  
  console.log('------- BODY as a Stream -------');
  request.on('data', chunk => {
    console.log(chunk.toString('utf-8'));
  });
  
  
});
