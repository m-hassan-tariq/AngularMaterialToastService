(function () {
    'use strict';

    var app = angular.module('app', ['ngMaterial']);

    app.controller('toastController', function (toastAlert) {

        var vm = this;
        
        vm.defaultToaster = function () {
            toastAlert.defaultToaster('Toast Activated');
        };

        vm.customToaster = function () {
            toastAlert.customToaster('Toast Activated', '3000', 'bottom left');
        };
    });

})();
