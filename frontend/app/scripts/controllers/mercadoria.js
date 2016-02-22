'use strict';

angular.module('angularComSassApp')
  .controller('MercadoriaCtrl', ['$scope', '$routeParams', 'mercadoriaFactory', 'componentesCustoFactory', 'novosPrecosFactory', function ($scope, $routeParams, mercadoriaFactory, componentesCustoFactory, novosPrecosFactory) {

    mercadoriaFactory.get({referencia: $routeParams.referenciaMercadoria}, function (mercadoriaFactory) {
      $scope.mercadoria = mercadoriaFactory.mercadoria;
      $scope.componenteCustos = mercadoriaFactory.componenteCustos;
    });

    novosPrecosFactory.get({referencia: $routeParams.referenciaMercadoria}, function (novosPrecosFactory) {
      $scope.novosPrecos = novosPrecosFactory.novosPrecos;
    });

    componentesCustoFactory.get({}, function (componentesCustoFactory) {
      $scope.componentes = componentesCustoFactory.componentes;
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
