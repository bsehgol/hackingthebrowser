$('input').submit(function(e){
    e.preventDefault(); 
    var text = $('#txt').val();
    io.emit('message', text);
});

