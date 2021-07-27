// Our service worker
// console.log('Service worker here!!!');
// //console.log("Made a change");
// console.log({self})

self.addEventListener('install', (evt) => {
  console.log('Installed');
});
self.addEventListener('activate', (evt) => {
  console.log('Activated');
});
self.addEventListener('fetch', (evt) => {
  console.log('Intercepted a http request', evt);
});
self.addEventListener('message', (evt) => {
  console.log('"Message from a web page');
});
