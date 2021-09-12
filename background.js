chrome.tabs.onCreated.addListener(function(tab) {
	if (tab.incognito){
		chrome.tabs.update(tab.id, {"muted": true});
		console.log("Muted tab with id: " + tab.id);
	}
});
