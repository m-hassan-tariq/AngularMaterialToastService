(function () {
    'use strict';

    angular
        .module('app')
        .factory('toastAlert', toastAlert);

    toastAlert.$inject = ['$mdToast'];

    function toastAlert($mdToast) {

        var service = {
            customToaster: customToaster,
            defaultToaster: defaultToaster
        };

        return service;

        ////////////////////////////Implementation//////////////////////////////////////

        function customToaster(content , delay, position) {
            $mdToast.show(
              $mdToast.simple()
                .textContent(content)
                .position(position)
                .hideDelay(delay)
            );
        }

        function defaultToaster(content) {
            $mdToast.show(
              $mdToast.simple()
                .textContent(content)
                .position('bottom right')
                .hideDelay(3000)
            );
        }

    }

})();