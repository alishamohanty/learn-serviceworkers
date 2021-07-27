const APP = {
  SW: null,
  init() {
    //Condition to check if the browser support service workers
    if ('serviceWorker' in navigator) {
      /*
        1. Register the service worker hosted at the root of the 
        site using the default scope
      */
      navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then((resg) => {
          console.log('Service Worker Registered');
          APP.SW = resg.installing || resg.waiting || resg.active;
        });

      /*
        2.See if the page currently has a service worker already running
      */
      if (navigator.serviceWorker.controller) {
        console.log('Service Worker already running');
        console.log(navigator.serviceWorker.controller);
      }

      /*
        3.Register a handler to detect when a new or updated service worker
        is installed.
      */
      navigator.serviceWorker.oncontrollerchange = () => {
        console.log('Service Worker changed');
        console.log(navigator.serviceWorker.controller);
      };
      /*
        4.Remove and unregister service workers (generally not done
      */
      // navigator.serviceWorker.getRegistrations().then((regs) => {
      //   regs.forEach((reg) => {
      //     reg
      //       .unregister()
      //       .then((unreg) => console.log('Service Worker unregistered'));
      //   });
      // });
      /*
        5.Listen for messages from the service workers
      */
    } else {
      console.log('Service workers are not supported in the browser');
    }
  },
};

document.addEventListener('DOMContentLoaded', APP.init);
