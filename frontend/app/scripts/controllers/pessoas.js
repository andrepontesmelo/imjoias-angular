'use strict';

angular.module('angularComSassApp')
  .controller('PessoasCtrl', ['$scope', 'myFactory', function ($scope, myFactory) {

    myFactory.get({}, function (myFactory) {
      $scope.pessoas = myFactory.pessoas;
    });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
