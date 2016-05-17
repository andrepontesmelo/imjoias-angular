'use strict';

angular.module('app')
  .controller('MercadoriaCtrl', ['$scope', '$routeParams', 'mercadoriaFactory',
    'faixas', 'componentesCustoFactory', 'componenteCustoHash', 'constantes',

    function($scope, $routeParams, mercadoriaFactory,
      faixas, componentesCustoFactory, componenteCustoHash, constantes) {

      mercadoriaFactory.get({
        referencia: $routeParams.referenciaMercadoria
      }, function(mercadoriaFactory) {
        $scope.mercadoria = mercadoriaFactory;
        $scope.entidade = $scope.mercadoria.mercadoria;
        $scope.hashComponentes = componenteCustoHash.obterHash();;
      });

      $scope.atualizar = function() {
        mercadoriaFactory.get({
          referencia: $routeParams.referenciaMercadoria
        }, function(mercadoriaFactory) {
          $scope.mercadoria = mercadoriaFactory;
          $scope.entidade = $scope.mercadoria.mercadoria;
          $scope.hashComponentes = componenteCustoHash.obterHash();;
        });
      };

      componentesCustoFactory.get({}, function(componentesCustoFactory) {
        $scope.componentes = componentesCustoFactory;
      });

      faixas.get({}, function(faixas) {
        $scope.faixas = faixas;
      });

      $scope.referenciaMercadoria = $routeParams.referenciaMercadoria;

      $scope.adicionar = function() {
        this.novoComponenteCusto.mercadoria = $scope.referenciaMercadoria
        this.mercadoria.componentes.push(this.novoComponenteCusto);
        this.novoComponenteCusto = [];
      };

      $scope.remover = function(index) {
        this.mercadoria.componentes.splice(index, 1);
      };

      $scope.novoComponenteCusto = {};

      $scope.obterUrlFoto = function() {
        if (this.mercadoria.possuiFoto)
          return constantes.url + 'mercadoria/' + $scope.referenciaMercadoria + '/foto';
        else
          return '';
      };

      $scope.salvar = function() {
        var mercadoriaJSON = {};
        mercadoriaJSON.mercadoria = this.mercadoria;
        mercadoriaJSON.componenteCustos = this.componenteCustos;

        mercadoriaFactory.update({
          referencia: $routeParams.referenciaMercadoria
        }, mercadoriaJSON).

        $promise.then(function(b) {
          $scope.atualizar();
        });
      };

      $scope.aba = 1;

      $scope.abaAtiva = function(idx) {
        return $scope.aba === idx;
      };

      $scope.ativeAba = function(idx) {
        $scope.aba = idx;
      };

      $scope.alterouCodigoNovoCC = function() {
        this.novoComponenteCusto.componentecusto = $scope.novoCC.codigo;
        this.novoComponenteCustoNome = $scope.hashComponentes[$scope.novoCC.codigo];
      };

      return [];
    }
  ]);
