$(document).ready(function(){
    _.chain(chrome.extension.getBackgroundPage().dregs)
	.each(function(entry) {
	    var link = document.createElement('div');
	    link.innerHTML = entry;
	    link.id = 'entry';
	    $('#shit').append(link); 
	    $(link).click(function(){
		chrome.tabs.create({url:$(this).text()}, function(tab){});
	    })
	}).value();
    chrome.extension.getBackgroundPage().resetBadgeText();
});

