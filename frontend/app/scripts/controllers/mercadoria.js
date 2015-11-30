'use strict';

angular.module('angularComSassApp')
  .controller('MercadoriaCtrl', ['$scope', '$routeParams', 'mercadoriaFactory', 'componentesDeCustoFactory', function ($scope, $routeParams, mercadoriaFactory, componentesDeCustoFactory) {

    mercadoriaFactory.get({referencia: $routeParams.referenciaMercadoria}, function (mercadoriaFactory) {
      $scope.mercadoria = mercadoriaFactory.mercadoria;
      $scope.componenteCustos = mercadoriaFactory.componenteCustos;
    });

    componentesDeCustoFactory.get({}, function (componentesDeCustoFactory) {
      $scope.componentes = componentesDeCustoFactory.componentes;
    });

    $scope.referenciaMercadoria = $routeParams.referenciaMercadoria;

    $scope.adicionar = function() {
      this.componenteCustos.push(this.novoComponenteCusto);
      this.novoComponenteCusto = [];
    };

    $scope.remover = function(index) {
      this.componenteCustos.splice(index, 1);
    };

    $scope.novoComponenteCusto = {};

    $scope.salvar = function() {

      var mercadoriaJSON = {};
      mercadoriaJSON.mercadoria = this.mercadoria;
      mercadoriaJSON.componenteCustos = this.componenteCustos;

      mercadoriaFactory.update({referencia: $routeParams.referenciaMercadoria}, mercadoriaJSON);
    };

    $scope.alterouCodigoNovoCC = function()
    {
      this.novoComponenteCusto.codigo=$scope.novoCC.codigo;
      this.novoComponenteCusto.nome=$scope.novoCC.nome;
    };

    return [];
  }]);
