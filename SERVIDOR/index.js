const http = require('http');

const server = http.createServer();

const io = require('socket.io')(server, {
  cors: {origin: '*'}
});

io.on('connection', (socket) => {
  console.log('You have been connect');

  socket.on('chat_online', (data) => {
    io.emit('chat_online', data);
  });

});

server.listen(3001);
