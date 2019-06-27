 // why are we using 'self'?

// Listen for install event, set callback
self.addEventListener('install', function(event) {
    console.log('service worker waiting to be installed');

    // event.waitUntil
    // ensures that the service worker will not install until the code inside waitUntil() has successfully occurred.
    event.waitUntil(
        caches.open('mystuff1')
        .then( function(cacheObject) {
            // return cacheObject.add('/img/cat2.png') // adding only 1 thing to the 'cache'
            return cacheObject.addAll( ['/css', '/data', '/js'] )
        })
    );

});

self.addEventListener('activate', function(event) {
    console.log('new service worker installed, and activated')
  });
  

 self.addEventListener('fetch', function (event) {
  
    // TODO HERE June 27
    event.respondWith(
        caches.match( event.request ) // >> searching stuff inside the 'cache'
            .then( function(response) {
                return response || fetch(event.request)
        })
    )



    /* 
    respond with a 'fetch' for a picture in img folder

    event.respondWith(
        new Response('where are you going')
        fetch('/img/1.jpg')
    )
    */


    /*
    any request with '.jpg', we will send cat2.png instead

    if( event.request.url.endsWith('.jpg') ) {
        event.respondWith(
            fetch('/img/cat2.png')
        )
    }
    */


    /* 


    event.respondWith(

        // go 'fetch' whatever the incoming 'request' was
        fetch(event.request) // >> you get a 'response object'
            .then( function(response) {
                // console.log(response)
                if ( response.status ==404 ) { // >> if 'response object status' is 404
                    return fetch('/img/cat2.png');
                }

                return response; // >> if 'response object' is good
            })
            .catch( function(error) {
                console.log(`catch error sw.js`)
            })
    )
    */

});