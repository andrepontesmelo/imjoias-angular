'use strict';

angular.module('app').factory('abas', function() {
  function inicializa($scope) {
    $scope.abaAtiva = 1;

    $scope.verificaAbaAtiva = function(idx) {
      return $scope.abaAtiva === idx;
    };

    $scope.ativeAba = function(idx) {
      $scope.abaAtiva = idx;
    };
  }

  return {
    inicializa: inicializa
  };
});
