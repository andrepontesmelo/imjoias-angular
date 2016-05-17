'use strict';

angular.module('app')
  .controller('PessoasCtrl', ['$scope', 'pessoasFactory', function($scope, pessoasFactory) {

    pessoasFactory.get({}, function(pessoasFactory) {
      $scope.pessoas = pessoasFactory;
    });

    return [];
  }]);
