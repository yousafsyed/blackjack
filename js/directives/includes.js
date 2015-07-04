define(['./module', '../constants'], function (app, cons) {
    'use strict';
    app.directive("includes", function ($http, $templateCache, $compile) {
        var attrName = "includes";
        return {
            restrict: 'A',
            link: function (scope, element, attributes) {
                var templateUrl = (cons.views.path + attributes[attrName] + cons.views.extention);
                $http.get(templateUrl, {
                        cache: $templateCache
                    })
                    .success(function (tplContent) {
                        element.html($compile(tplContent)(scope))
                            .removeAttr(attrName);
                    });
            }
        };
    });
});
