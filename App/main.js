require.config({
    paths: {
        jQuery: "lib/jquery-2.0.0.min",
        kendo: "lib/kendo.mobile.min"
    },
    shim: {
        jQuery: {
            exports: "jQuery"
        },
        kendo: {
            deps: ["jQuery"],
            exports: "kendo"
        }
    }
});

// Expose the app module to the global scope so Kendo can access it.
var app;

require(["app"], function (application)
{
    app = application;
    app.init();
});