# AutoLinked

A Chrome extension that's able to send connection requests to a list of people in a LinkedIn search. The extension uses the "chrome.tabs" and "chrome.runtime" APIs.
<<<<<<< HEAD

## How to run it?

  1. Open Google Chrome browser and navigate to chrome://extensions/.
  2. Enable developer mode by toggling the switch in the top right-hand corner of the page.
  3. Click on the "Load unpacked" button in the top left-hand corner of the page.
  4. Select the folder where your Chrome extension is located.
  5. Click "OK" or "Select" to install the extension.

## Architectural overview

Every element in a webpage will have a unique 'id' or 'class' for it to function properly as each one has a different use and different property for its unique functionality.

Here we check if the inner text of a button is "connect" by filtering and if it is satisfied, it is clicked. After clicking we see that another popup comes to send message with a button "send". This time we use the attribute "aria-label" as the selector because the 'id' and 'class' are not unique for the button. 
With an interval of 3 seconds each, the buttons "connect" and "send" are clicked-on in the respective order.






