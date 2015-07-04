define(['./module'], function (app) {
    'use strict';
    return app.filter('listingsSort', function ($filter) {
        /*
          Custom filter for listings
          to Continue grouping while
          sorting
        */
        return function (array, coloumn, reverse) {

            // find all seperators
            var seperators = $.grep(array, function (obj, index) {
                return (obj.type == "seperator")
            });

            // create empty array for storing filtered data
            var filtered = [];

            angular.forEach(seperators, function (c, i) {
                // create empty array for storing listings
                var listings = [];

                // find listings with same event id
                angular.forEach(array, function (j, k) {
                    if (j.type == "listing" && j.event_id == c.event_id) listings.push(j);
                });

                //filter listings with native orderBy
                listings = $filter('orderBy')(listings, coloumn, reverse);

                //push current sperator
                filtered.push(c);

                //push filtered listings to main array
                angular.forEach(listings, function (k, l) {
                    filtered.push(k);
                })
            });

            // return the main filtered array
            return filtered;
        }
    });
});
