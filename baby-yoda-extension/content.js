chrome.runtime.onMessage.addListener(function() {

  var imageSrc = chrome.extension.getURL('dogyoda.jpeg');

  var text = '';
  for (var i = 0; i < 25; i++) {
    text = text + ' ' + 'babyYoda Rides Free';
  }
  $('p').text(text);

  $('img').attr('src', imageSrc);
});
