//function start(tab) {
//    chrome.windows.create({
//        url: chrome.runtime.getURL("test.html"),
//        type: "popup",
//        focused: true
//    });
//    let url = chrome.runtime.getURL("test.html");
//    let tab = await chrome.tabs.create({url});
//}

chrome.action.onClicked.addListener(
//chrome.runtime.onClicked.addListener(start);
//chrome.runtime.onInstalled.addListener(
    async () => {
        chrome.windows.create({
            url: chrome.runtime.getURL("svg.html"),
            type: "popup",
            focused: true,
        });
//        let url = chrome.runtime.getURL("test.html");
//        let tab = await chrome.tabs.create({url});
    }
);