'use strict';

angular.module('angularComSassApp')
  .controller('PessoasCtrl', ['$scope', 'pessoasFactory', function ($scope, pessoasFactory) {

    pessoasFactory.get({}, function (pessoasFactory) {
      $scope.pessoas = pessoasFactory;
    });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    return [];
  }]);
