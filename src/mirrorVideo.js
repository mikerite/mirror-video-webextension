const TITLE_MIRROR = 'Mirror Video';
const TITLE_DONT_MIRROR = "Don't Mirror Video";

async function toggleMirror(tab) {
  if (await browser.browserAction.getTitle({ tabId: tab.id }) === TITLE_DONT_MIRROR) {
    await browser.browserAction.setIcon({tabId: tab.id, path: "icons/mirror.svg"});
    await browser.browserAction.setTitle({ tabId: tab.id, title: TITLE_MIRROR });
    await browser.tabs.removeCSS({ file: '/mirrorVideo.css' });
  } else {
    await browser.browserAction.setIcon({tabId: tab.id, path: "icons/dont_mirror.svg"});
    await browser.browserAction.setTitle({ tabId: tab.id, title: TITLE_DONT_MIRROR });
    await browser.tabs.insertCSS({ file: '/mirrorVideo.css', runAt: "document_start" });
  }
}

browser.browserAction.onClicked.addListener(toggleMirror);
