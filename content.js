// // // Listen for messages
// function download(src) {
//   var link = document.createElement("a");
//   link.id = 'insta-downloader'; //give it an ID!
//   link.href = src;
//   link.target = '_blank';
//   document.body.appendChild(link);
//   document.getElementById('insta-downloader').click();
// }

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  // If the received message has the expected format...
  if (msg.text === 'get_video_url') {
    const videoUrl = document.querySelector('video');
    if(videoUrl) {
      sendResponse(videoUrl.src);
    }
  }
});