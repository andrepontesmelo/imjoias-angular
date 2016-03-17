'use strict';

angular.module('angularComSassApp')
    .controller('PessoasCtrl', ['$scope', 'pessoasFactory', function($scope, pessoasFactory) {

        pessoasFactory.get({}, function(pessoasFactory) {
            $scope.pessoas = pessoasFactory;
        });

        return [];
    }]);
