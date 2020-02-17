console.log("i am in the background");

chrome.browserAction.onClicked.addListener(function(){
    console.log("You clicked me");
    chrome.tabs.executeScript({
    file:"content.js"

     });


});