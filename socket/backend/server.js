// See the README file for instructions on how to run this server

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3201;

server.listen(port);

io.on('connection', function (socket) {
  // socket.emit('news', { hello: 'world' });
  // socket.on('my other event', function (data) {
  //   console.log('server received "my other event" with data:',data);
  // });

  socket.on('username', function(username) {
    socket.username = username;
    io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
  });

  socket.on('disconnect', function(username) {
      io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
  })

  socket.on('message', function(message) {
      io.emit('message', '<strong>' + socket.username + '</strong>: ' + message);
  });
});

console.log('Socket server running on port: ' + port);

