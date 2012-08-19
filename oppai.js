var news = 0;
var socket = io.connect('http://localhost:3000');
var dregs = [];

socket.on('news', function(data) {
    var url = data.url;
    dregs.unshift(url);
    news++;
    chrome.browserAction.setBadgeText({ text:news+"" });
});

chrome.tabs.onUpdated.addListener(function(tabid, inf) {
    if(inf.status === 'loading') {
	var url = inf.url;
	socket.emit('look at me', { 'url':url }); 
    }
});

function resetBadgeText(){
    news = 0;
    chrome.browserAction.setBadgeText({ text:""});
}