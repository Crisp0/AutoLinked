# AutoLinked
a chrome extension that's able to send connection requests to a list of people in a LinkedIn search. The extension uses the "chrome.tabs" and "chrome.runtime" APIs

## Working
### Basic Content
The function uses the Chrome Extension API to listen for messages from the background script of a Chrome extension. 
The "newPageLoaded" function is defined as an asynchronous function that is called when the "connect" message is received. It retrieves all the "button" elements in the current web page and filters out the ones whose text content is not equal to "Connect". It then clicks on the first "Connect" button that it finds and clicks on the "Send now" button if it exists.

The "filter" function is a helper function that takes an array of "button" elements as input and returns a new array containing only the "Connect" buttons.

Overall, this code appears to be part of a larger Chrome extension that automates the process of connecting to a video conferencing session by automatically clicking the "Connect" button.
### Popup
The function uses the Chrome Extension API to send a message to a content script whenever the active tab is on LinkedIn.

The function uses the "setInterval" method to repeatedly call a callback function every 3 seconds. The callback function queries the active tab using the "chrome.tabs.query" method and checks if the URL of the active tab includes "www.linkedin.com". If the URL matches, the function sends a message to the content script with the URL and a message type of "connect".

The function also updates the inner text of an HTML element to show the number of times a message has been sent. This number is incremented with each message sent.

When the "connect" button is clicked, the code checks whether the "intervalId" variable is defined. If it is, the function clears the interval and sets the "intervalId" variable to null, and updates the inner text of the "connect" button to "START CONNECTING". If the "intervalId" variable is not defined, the function calls "startSendingMessages" to begin sending messages, sets the "intervalId" variable to the value returned by "setInterval", and updates the inner text of the "connect" button to "STOP CONNECTING".

Chrome extension that automates the process of connecting with people on LinkedIn by sending messages at regular intervals. The extension uses the "chrome.tabs" and "chrome.runtime" APIs to communicate with the active tab and the background script of the extension, respectively.

## manifest.json
The Chrome extension requires a 'manifest.json' file where all the configurations are stored. The 'manifest.json' file contains all the necessary information required to build the Chrome extension. It is the first file the extension checks and everything is loaded from this single file.

```json
{
  "manifest_version": 3,
  "name": "AutoLinked",
  "version": "1.0",
  "action": {
    "default_popup": "./pages/popup.html"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["scripts/contentScript.js"]
    }
  ],
  "permissions": [
    "tabs","storage","background"
  ]
}
```
The above code is a JSON file that is used to configure Chrome extension. The "manifest_version" property specifies the version of the manifest file format. In this case, the version is 3.

The "name" property specifies the name of the extension, which is "AutoLinked" in this case. The "version" property specifies the version of the extension.

The "action" property specifies the user interface for the extension. In this case, the user interface is a popup that is displayed when the extension icon is clicked. The "default_popup" property specifies the path to the HTML file that contains the popup user interface. In this case, the path is "./pages/popup.html".

The "content_scripts" property specifies which scripts should be injected into web pages when the extension is active. The "matches" property specifies the URLs of the pages that the script should be injected into. In this case, the script should be injected into all URLs. The "js" property specifies the path to the JavaScript file that should be injected into the web pages. In this case, the path is "scripts/contentScript.js".

The "permissions" property specifies the permissions that the extension requires to function properly. In this case, the extension requires permissions to access tabs, storage, and the background script. The "tabs" permission is required to interact with browser tabs. The "storage" permission is required to store data locally in the browser. The "background" permission is required to run a background script that can perform operations on behalf of the extension.






