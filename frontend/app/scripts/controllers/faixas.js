'use strict';

angular.module('app')
  .controller('FaixasCtrl', ['$scope', function ($scope) {
    $scope.aba = 1;
    $scope.alterando = true;
    $scope.dados = {};
    $scope.dados.original = {};
    $scope.dados.original.listaFaixas = [ 'A', 'B', 'C', 'D', 'E', 'F'];
    $scope.dados.original.marcacoes = {};
    $scope.dados.original.marcacoes.varejo = {'A': 1.21, 'B': 2.21, 'C': 3.21, 'D': 4.49, 'E': 5.55, 'F': 1.92};
    $scope.dados.original.marcacoes.atacado  = {'A': 5.21, 'B': 3.21, 'C': 3.31, 'D': 4.19, 'E': 2.52, 'F': 1.42};
    $scope.dados.alterando = angular.copy($scope.dados.original);
    $scope.alteracoes = [];

    $scope.abaAtiva = function(idx) {
        return $scope.aba === idx;
    };

    $scope.ativeAba = function(idx) {
        $scope.aba = idx;
    };
    
    $scope.iniciarAlteracoes = function() {
      $scope.alterando = true;
    };

    $scope.descartarAlteracoes = function() {
      $scope.alterando = false;
      $scope.dados.alterando = angular.copy($scope.dados.original);
      $scope.atualizarAlteracoes();
    };

    $scope.removerFaixa = function(faixa) {
        var i = $scope.dados.alterando.listaFaixas.indexOf(faixa);
        if(i !== -1) {
            $scope.dados.alterando.listaFaixas.splice(i, 1);
        }

        $scope.atualizarAlteracoes();
    };

    $scope.adicionarFaixa = function(faixa) {
        $scope.dados.alterando.listaFaixas.push(faixa);
        $scope.atualizarAlteracoes();
    };

    $scope.atualizarAlteracoes = function() {
        $scope.alteracoes = [];
        var exclusoesFaixas = _.difference($scope.dados.original.listaFaixas, $scope.dados.alterando.listaFaixas);
        exclusoesFaixas.forEach(function(faixa) {
            $scope.alteracoes.push("Exclusão de faixa " + faixa);
        });  

        var inclusoesFaixas = _.difference($scope.dados.alterando.listaFaixas, $scope.dados.original.listaFaixas);
        inclusoesFaixas.forEach(function(faixa) {
            $scope.alteracoes.push("Adição de faixa " + faixa);
        });  
    };
  }]);
