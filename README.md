# Mute Incognito Tab
Hi! This simple extension is made to automatically mute any incognito tab.  
There are no configurations to set and no complicated things to learn. *No tracking!*  

## Supported browsers
This extension should work with any current Chromium based browser.  
Tested on Chromium 81.0.4044.138 and Opera 70.0.3728.95.  

## Installation
You can install the extension in your Opera browser via the [Opera Addons store](https://addons.opera.com/en/extensions/details/mute-incognito-tab/).
If you are using another browser such as Chromium or chrome, you can use extensions like [CrossPilot](https://chrome.google.com/webstore/detail/crosspilot/migomhggnppjdijnfkiimcpjgnhmnale) to load the mute incognito tab crx file.

## Installation (manual way)
Since you can only install crx files when it's signed and published to the Chrome Web Store against payment, you should follow these installation instructions.  
- Download this repository to a persistent directory (either via `git clone` or using the `Download ZIP` button)
- Open `chrome://extensions/` in a new tab (the URL might vary from browser to browser)
- Enable `Developer mode`
- Click `Load unpacked` and select the current repo directory
- Wait and click `Details` at the new installed extension
- Click `Allow in incognito mode`

If you wish to install this extension for any time the browser starts, you should create/modify a shortcut to the executable with the following argument:
`--load-extension="path\to\repository"` 

Done!

