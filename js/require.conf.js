require.config({
    baseUrl: './js',
    paths: {
        'angular': '../lib/angular/angular',
        'jquery': '../lib/jquery/dist/jquery',
        'angular-route': '../lib/angular-route/angular-route',
        'angular-fixed-header-table': '../lib/angu-fixed-header-table/angu-fixed-header-table',
        'domReady': '../lib/requirejs-domready/domReady'
    },
    shim: {
        'jquery': {
            deps: ['domReady']
        },
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        }
    },
    deps: [
        // start the app :)
        './bootstrap'
    ]
});
