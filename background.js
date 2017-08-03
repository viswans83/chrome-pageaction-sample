chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url) {
    if (/^http:\/\/localhost/.test(changeInfo.url)) {
      chrome.pageAction.show(tabId);
    } else {
      chrome.pageAction.hide(tabId);
    }
  }
});

chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {
    file: "login.js"
  });
});
