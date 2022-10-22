const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 5000;
const HOST =  process.env.PORT || '127.0.0.1';

const server = http.createServer(app);

server.listen(HOST, PORT, 
    () => console.log('Server is listening...'))