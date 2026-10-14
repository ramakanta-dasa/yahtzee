RK DICE · ANDROID INSTALL PACK

WHAT'S INCLUDED
- index.html: the app
- manifest.json: install metadata
- sw.js: offline cache
- icon-192.png and icon-512.png: app icons

INSTALL ON ANDROID
A Progressive Web App must be served from HTTPS (or localhost) to be installable. Opening index.html directly from a ZIP or file manager will not enable installation or offline caching.

1. Upload the contents of this folder to a static web host that gives you an HTTPS address. For example, create a new public repository on GitHub, upload these five files, then enable GitHub Pages in the repository settings. Alternatively, use any static HTTPS hosting service you trust.
2. Open the resulting HTTPS site in Chrome on your Android phone.
3. Open Chrome's menu (⋮) and choose "Install app" or "Add to Home screen", depending on the option shown.
4. Open RK Dice from your home screen once while online. After the service worker has cached the app, it should work offline.
5. To verify offline use, open the app once, turn on Airplane mode, then launch it again.

NOTES
- The selected colour palette is saved on that device.
- Dice rolls use the browser's Math.random() function and are intended for casual play, not cryptographic use.
- The app does not collect or send personal data.
- No scorecard is included, by design.
