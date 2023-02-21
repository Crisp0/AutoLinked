(() => {
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, videoId } = obj;
    if (type === "connect") {
      currentVideo = videoId;
      newPageLoaded();
    } else {
      console.log("reject");
    }
  });
  let buttonIndex = 0;
  const newPageLoaded = async () => {
    let buttons = document.getElementsByTagName("button");
    let filterButtons = filter(buttons);
    if (filterButtons[buttonIndex].innerText == "Connect") {
      console.log(filterButtons[buttonIndex]);
      filterButtons[buttonIndex].click();
      const sendButton = document.querySelector('[aria-label="Send now"]');
      if (sendButton) {
        sendButton.click();
      }
    }
  };
  const filter = (buttons) => {
    console.log("filter");
    let filterdButtons = [];
    for (const button of buttons) {
      if (button.innerText == "Connect") {
        filterdButtons.push(button);
      }
    }
    return filterdButtons;
  };
})();
