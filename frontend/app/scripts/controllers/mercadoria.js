'use strict';

angular.module('angularComSassApp')
  .controller('MercadoriaCtrl', ['$scope', '$routeParams', 'mercadoriaFactory', function ($scope, $routeParams, mercadoriaFactory) {

    mercadoriaFactory.get({referencia: $routeParams.referenciaMercadoria}, function (mercadoriaFactory) {
      $scope.mercadoria = mercadoriaFactory.mercadoria;
      $scope.componenteCustos = mercadoriaFactory.componenteCustos;
    });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.referenciaMercadoria = $routeParams.referenciaMercadoria;

    $scope.salvar = function() {

      var mercadoriaJSON = {};
      mercadoriaJSON.mercadoria = this.mercadoria;
      mercadoriaJSON.componenteCustos = this.componenteCustos;

      mercadoriaFactory.update({referencia: $routeParams.referenciaMercadoria}, mercadoriaJSON);
    };

    return [];
  }]);
