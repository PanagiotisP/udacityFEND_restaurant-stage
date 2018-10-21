document.addEventListener("DOMContentLoaded", function(event) {
    if(!navigator.serviceWorker) return;
    navigator.serviceWorker.register('sw.js').then(function() {
        console.log("worked");
    }).catch(function() {
        console.log("not worked");
    })
});