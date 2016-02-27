# Angular Material Toast Service
Custom toast service using Angular Material 

Customize Angular toast service, register within your controller and other data services and use it throughout your project. 

Angular Code:

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

Toaster Service:

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

Output:
 
![screenshot_1](https://cloud.githubusercontent.com/assets/10474169/13370494/6badffcc-dcce-11e5-9ddd-16ed01fcfefc.png)


