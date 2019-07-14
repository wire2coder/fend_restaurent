let stuffToCached = [
     './css/styles.css',
     './data/restaurants.json',
     './img/1.jpg',
     './img/2.jpg',
     './img/3.jpg',
     './img/4.jpg',
     './img/5.jpg',
     './img/6.jpg',
     './img/7.jpg',
     './img/8.jpg',
     './img/9.jpg',
     './img/10.jpg',
     './js/dbhelper.js',
     './js/main.js',
     './js/restaurant_info.js',
     'index.html',
     'restaurant.html',
     'sw.js'
 ];

 
// Listen for 'install event', set callback
self.addEventListener('install', function(event) {
    console.log('service worker waiting to be installed');

    // event.waitUntil
    // ensures that the service worker will not install until the code inside waitUntil() has successfully occurred.
    event.waitUntil(

        caches.open('my-cash-1')
        .then( function(cacheObject) {
            return cacheObject.addAll( stuffToCached )
        })
        .catch( function(error1) {
            throw error1;
        })
    );

});


// July 14, 2019
self.addEventListener('activate', function(event) {
    console.log('new service worker installed, and activated')

    event.waitUntil(
        caches.keys().then(function (cashNames1) {
            return Promise.all(
                cashNames1.filter( function(cashname) { // prototype.filter(), create a new array
                    return cashname.startsWith('my-') && cashname != 'my-cash-1';
                })
                .map( function(cashname) { // prototype.map(), create a new array
                    return caches.delete('my-cash-1');
                })
            );
        })
    );
});


// June, 27, 2019
self.addEventListener('fetch', function (event) {
  
    event.respondWith(
        caches.match( event.request ) // >> searching stuff inside the 'cache'
            .then( function(response) {
                return response || fetch(event.request)
        })
    )
});
  