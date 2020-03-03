
//Learn more or give us feedback
console.log('socket server content script version 2');
console.log('Be sure to read the README file to get this extension working');

// This script loads after socket.io.js, so the "io" global
// variable below will already be present

    var port = 3201;
    var socket = io.connect('159.203.70.158:' + port);

    socket.on('connect', function() {
      console.log('io connected successfully');
    });

    socket.on('connect_error', function() {
      console.log('io failed to connect. Is the socket server running? Look at the README for instructions');
    });

    // // Add a listener for an event named "news"
    // socket.on('news', function (data) {
    //   console.log('received "news" event with data:',data);

    //   // send back an event named "my other event" to the socket server
    //   socket.emit('my other event', { my: 'data' });
    // });

    // append the chat text message
    socket.on('message', function(msg){
      console.log(msg)
        // $('#messages').append($('<li>').html(msg));
        // document.getElementById("messages").appendChild(document.createElement("li").html(msg))
        // document.getElementById("messages").appendChild('li').html(msg)

    });
    // append text if someone is online
    socket.on('is_online', function(username) {
      console.log(`${username} is online`)
        // $('#messages').append($('<li>').html(username));
        // document.getElementById("messages").appendChild('li').html(username)

    });
    // ask username
    var username = prompt('Please tell me your name');
    socket.emit('username', username);
