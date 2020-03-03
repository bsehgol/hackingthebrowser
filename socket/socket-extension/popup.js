console.log("popupjs is called")
    var port = 3201;
    var socket = io.connect('159.203.70.158:' + port);
io.on('connection', function (socket) {

    // var socket = io();
    console.log(socket)

    $('form').submit(function(){

      socket.emit('message', $('#txt').val());

      $('#txt').val('');

      return false;

    });

    socket.on('message', function(msg){

      $('#message').append($('<li>').text(msg));

    });

  });


// // var socket = io();

// //         $('form').submit(function(){

// //           socket.emit('message', $('#txt').val());

// //           $('#txt').val('');

// //           return false;

// //         });
// var port = 3201;

// var socket = io.connect('159.203.70.158:' + port);


// $('form').submit(function(e){

//     console.log(`event is ${event}`)
//     e.preventDefault(); 
//     var text = $('#txt').val();
//     console.log(`text is ${text}`)
//     socket.emit('message', text);
// });

