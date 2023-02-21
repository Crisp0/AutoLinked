let intervalId;
let number = document.getElementById("progerss-number");
let i = 0
function startSendingMessages() {
  intervalId = setInterval(() => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // Check if the active tab is on LinkedIn
      if (tabs[0].url.includes("www.linkedin.com")) {
        // Send a message to the content script
        chrome.tabs.sendMessage(tabs[0].id, {url: tabs[0].url, type: "connect"});
        number.innerText = i++
      }
    });
  }, 3000);
}
let button = document.getElementById("connect");
button.addEventListener("click", function () {

  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    button.innerText = "START CONNECTING";
  } else {
    startSendingMessages();
    button.innerText = "STOP CONNECTING";
  
  }

});