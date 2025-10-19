<h1 align="center">📲 <b>Downloadable Website - Documentation</b></h1>

<h2>📘 <b>Overview</b></h2>

This document explains how the jR website was converted into a *downloadable, installable app* — making it behave like a native application on mobile devices without requiring Play Store or App Store submission.

- Converted the existing website into a *Progressive Web App (PWA)*
- Fully functional offline and installable
- Uses the same *HTML, CSS, and JavaScript* codebase

<h2>⚙ <b>Core Requirements</b></h2>

<h3>1️⃣ Web App Manifest</h3>

- A manifest.json file was created to define app metadata.
- Includes:
  - App name: jR
  - Short name: jR
  - Start URL: /index.html
  - Display mode: standalone (full screen, no browser UI)
  - Theme color: #000000
  - Background color: #ffffff
  - Icons: 192x192 and 512x512 PNG files inside /icons folder

Example snippet:

<pre>
"icons": [
  {
    "src": "icons/icon-192x192.png",
    "sizes": "192x192",
    "type": "image/png"
  },
  {
    "src": "icons/icon-512x512.png",
    "sizes": "512x512",
    "type": "image/png"
  }
]
</pre>

<h3>2️⃣ Linking Manifest in HTML</h3>

- Manifest linked in <head> for browsers to recognize the app:

<pre>
&lt;link rel="manifest" href="manifest.json"&gt;
&lt;meta name="theme-color" content="#000000"&gt;
&lt;link rel="apple-touch-icon" href="icons/icon-192x192.png"&gt;
</pre>

<h3>3️⃣ Service Worker</h3>

- A minimal sw.js file was added to register the site as a PWA.
- Handles caching and offline access.
- Registered in HTML before </body>:

<pre>
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Service Worker registered"));
}
</pre>

<h3>4️⃣ Icons</h3>

- Two custom icons stored in `/icons` folder:
  - **icon-192x192.png** → used for home screen and small displays  
    <br>
    <img src="https://raw.githubusercontent.com/jagyanjit/Downloadable-Website/main/icons/192x192.jpg" alt="192x192 Icon" width="96" style="border-radius:12px;">

  - **icon-512x512.png** → used for app launcher and larger devices  
    <br>
    <img src="https://raw.githubusercontent.com/jagyanjit/Downloadable-Website/main/icons/512x512.jpg" alt="512x512 Icon" width="128" style="border-radius:12px;">

- Correct paths and sizes are crucial for the icon to display properly on mobile devices.


<h2>🧱 <b>Folder Structure</b></h2>

<pre>
D:\jR
├── index.html
├── manifest.json
├── sw.js
└── icons/
    ├── icon-192x192.png
    └── icon-512x512.png
</pre>

<h2>🚀 <b>Deployment & Access</b></h2>

- *Hosting*
  - Project uploaded to *GitHub* and deployed using *Vercel* for HTTPS access.
  - Example URL: https://jagyanjit.vercel.app
- *Installing on Phone*
  - Open the website URL on mobile Chrome/Android or Safari/iOS
  - *Chrome (Android):* Menu → Add to Home Screen → Install
  - *Safari (iOS):* Share → Add to Home Screen
- *Behavior*
  - Launches in full-screen mode
  - Shows custom app icon
  - Can work offline (thanks to service worker)

<h2>📌 <b>Key Notes</b></h2>

- This approach makes the website *behave like a native app* without uploading to Play Store.
- For full APK/Android wrapper, tools like *PWABuilder* or *Capacitor* can convert the PWA into a standalone APK.
- Clear cache or uninstall previous versions to see updated icons or manifest changes.

<h2>✅ <b>Summary</b></h2>

- Converted jR website into a *downloadable PWA*
- Added manifest, icons, and service worker
- Fully installable on Android and iOS without app stores
- Offline-capable and retains the same responsive design and features
