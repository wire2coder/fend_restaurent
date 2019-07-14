## FEND Project 5, Restaurant Review with 'Service Worker'

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.


### Specification

1. Display map on screen with 'MapBox API'
2. Responsive design with regular CSS, no CSS frameworks
3. Provide 'Accessibility Features' with tabindex
4. Use 'Service Worker' to 'caches' content to web-browser cache storage, thus user can view the page when no internet connection is not available or slow.


### Running the 'Web App'

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 5500` (or some other port, if port 5500 is already in use.) For Python 3.x, you can use `python3 -m http.server 5500`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 5500`.
2. With your server running, visit the site: `http://localhost:5500`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.




