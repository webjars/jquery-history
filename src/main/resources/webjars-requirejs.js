/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        "jquery.history": [ 'webjars!jquery.js' ]
    }
});
