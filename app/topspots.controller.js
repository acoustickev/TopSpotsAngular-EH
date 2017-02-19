(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('TopSpotsController', TopSpotsController);

    TopSpotsController.$inject = ['TopSpotsFactory', 'toastr'];

    /* @ngInject */
    function TopSpotsController(TopSpotsFactory, toastr) {
        var vm = this;
        vm.title = 'TopSpotsController';

        activate();

        ////////////////

        function activate() {

            getTopSpots();

        }

        function getTopSpots() {

            TopSpotsFactory.getTopSpots().then(
                function(response) {

                    vm.topspots = response.data;
                    toastr.success('We have topspots!!');

                },
                function(error) {
                    toastr.error(error);
                }
            )

        }
    }
})();
