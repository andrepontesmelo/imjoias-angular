'use strict';

angular.module('angularComSassApp')
    .controller('MercadoriasCtrl', ['$scope', 'mercadoriasFactory', function($scope, mercadoriasFactory) {

        mercadoriasFactory.get({}, function(mercadoriasFactory) {
            $scope.mercadorias = mercadoriasFactory;
        });

        $scope.startsWith = function(actual, expected) {
            var lowerStr = (actual + "").toLowerCase();
            return lowerStr.indexOf(expected.toLowerCase()) === 0;
        }

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        return [];

    }]);
