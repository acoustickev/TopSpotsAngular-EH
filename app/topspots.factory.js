
(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('TopSpotsFactory', TopSpotsFactory);

    TopSpotsFactory.$inject = ['$http','$q'];

    /* @ngInject */
    function TopSpotsFactory($http, $q) {
        var service = {
            getTopSpots: getTopSpots
        };
        return service;

        ////////////////

        function getTopSpots() {

        	var defer = $q.defer();

           $http({
                method: 'GET',
                url: '../topspots.json'
            }).then(function(response) {

               defer.resolve(response);

           }, function(error) {
           		console.log(error);
           });

           return defer.promise;
        }
    }
})();