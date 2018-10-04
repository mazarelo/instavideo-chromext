
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  // If the received message has the expected format...
  if (msg.text === 'get_video_url') {
    const videoUrl = document.querySelector('video');
    if(videoUrl) {
      sendResponse(videoUrl.src);
    }
  }
});