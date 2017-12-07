if ('serviceWorker' in navigator) {
  console.log(navigator.serviceWorker);

  navigator.serviceWorker.register('service-worker.js').then(function(registration) {
    console.log('Service Worker registered');
  }).catch(function(err) {
    console.log('Service Worker registration failed: ', err);
  });
}
