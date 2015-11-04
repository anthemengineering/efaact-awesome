chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url && tab.url.indexOf('https://timeandexpense.myefaactweb.com/application/timecard2013.aspx') === 0) {
        chrome.pageAction.show(tabId);
    }
});

chrome.pageAction.onClicked.addListener(function(){
    chrome.tabs.executeScript(null, {file: "main.js"});
});