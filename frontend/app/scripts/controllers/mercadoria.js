'use strict';

angular.module('app')
  .controller('MercadoriaCtrl', ['$scope', '$routeParams', '$filter', 'mercadoriaFactory',
    'faixas', 'componentesCustoFactory', 'componenteCustoHash', 'constantes',
    'abas',

    function($scope, $routeParams, $filter, mercadoriaFactory,
      faixas, componentesCustoFactory, componenteCustoHash, constantes,
      abas) {

      abas.inicializa($scope);

      $scope.alterar = function() {
        $scope.novoComponenteCustoCodigo = {};
        $scope.componentes = [];
      };

      $scope.alterar();

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
        $scope.todosComponentes = componentesCustoFactory;
      });

      faixas.get({}, function(faixas) {
        $scope.faixas = faixas;
      });

      $scope.referenciaMercadoria = $routeParams.referenciaMercadoria;

      $scope.adicionarComponente = function() {
        $scope.novoComponenteCusto.mercadoria = $scope.referenciaMercadoria
        $scope.componentes.push($scope.novoComponenteCusto);
        $scope.novoComponenteCusto = [];
      };

      $scope.removerComponenteIndice = function(index) {
        $scope.componentes.splice(index, 1);
      };

      $scope.novoComponenteCusto = {};

      $scope.obterUrlFoto = function() {
        if ($scope.mercadoria.possuiFoto) {
          return constantes.url + 'mercadoria/' + $scope.referenciaMercadoria + '/foto';
        }

        return '';
      };

      $scope.obterPutJSON = function() {
        var putJSON = {};

        var listaComponentes = [];

        $scope.componentes.forEach(function(c) {
          var componente = {};
          componente["componentecusto"] = c.componentecusto
          componente["quantidade"] = c.quantidade;

          listaComponentes.push(componente);
        });

        putJSON.mercadoria = $scope.mercadoria
        putJSON.componentes = listaComponentes;

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

        $scope.novoComponenteCusto.componentecusto = novoCodigo;
        $scope.novoComponenteCusto.nome = $scope.hashComponentes[novoCodigo];
      };

      return [];
    }
  ]);
