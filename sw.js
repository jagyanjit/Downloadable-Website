self.addEventListener("install", e => {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", e => {
  // just let requests pass through
});