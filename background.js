
function downloadVideo(videoUrl) {
  chrome.downloads.download({
    url: videoUrl,
  });
}

chrome.browserAction.onClicked.addListener(function (tab) {
  var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?instagram\.com/;
  if (urlRegex.test(tab.url)) {
    chrome.tabs.sendMessage(tab.id, {text: 'get_video_url'}, downloadVideo);
  }
});
