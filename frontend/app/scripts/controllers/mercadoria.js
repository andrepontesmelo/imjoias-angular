'use strict';

angular.module('app')
  .controller('MercadoriaCtrl', ['$scope', '$routeParams', '$filter', 'mercadoriaFactory',
    'faixas', 'componentesCustoFactory', 'componenteCustoHash', 'constantes',
    'abas',

    function($scope, $routeParams, $filter, mercadoriaFactory,
      faixas, componentesCustoFactory, componenteCustoHash, constantes,
      abas) {

      abas.inicializa($scope);

      $scope.novoComponenteCustoCodigo = {};

      mercadoriaFactory.get({
        referencia: $routeParams.referenciaMercadoria
      }, function(mercadoriaFactory) {
        $scope.mercadoria = mercadoriaFactory.mercadoria;
        $scope.componentes = mercadoriaFactory.componentes;
        $scope.novosPrecos = mercadoriaFactory.novosPrecos;
        $scope.novosPrecosVarejo = mercadoriaFactory.novosPrecosVarejo;

        $scope.referenciaFormatadaDigito =
          $filter('referenciaFormatada')($scope.mercadoria.referencia);

        $scope.hashComponentes = componenteCustoHash.obterHash();;
      });

      $scope.recarregar = function() {
        mercadoriaFactory.get({
          referencia: $routeParams.referenciaMercadoria
        }, function(mercadoriaFactory) {
          $scope.mercadoria = mercadoriaFactory;
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
        this.componentes.push(this.novoComponenteCusto);
        this.novoComponenteCusto = [];
      };

      $scope.removerComponenteIndice = function(index) {
        this.componentes.splice(index, 1);
      };

      $scope.novoComponenteCusto = {};

      $scope.obterUrlFoto = function() {
        if (this.mercadoria.possuiFoto) {
          return constantes.url + 'mercadoria/' + $scope.referenciaMercadoria + '/foto';
      }

        return '';
      };

      $scope.obterPutJSON = function() {
        var putJSON = {};
        putJSON.mercadoria = this.mercadoria;
        putJSON.componentes = this.componentes;

        return putJSON;
      };

      $scope.put = function() {

        mercadoriaFactory.update({
            referencia: $routeParams.referenciaMercadoria
          }, $scope.obterPutJSON()),

          $promise.then(function(b) {
            $scope.recarregar();
          });
      };

      $scope.alterouCodigoNovoComponenteCusto = function() {
        var novoCodigo = $scope.novoComponenteCustoCodigo.codigo;

        this.novoComponenteCusto.componentecusto = novoCodigo;
        this.novoComponenteCusto.nome = $scope.hashComponentes[novoCodigo];
      };

      return [];
    }
  ]);
