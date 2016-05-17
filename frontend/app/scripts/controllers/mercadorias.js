'use strict';

angular.module('app')
  .controller('MercadoriasCtrl', ['$scope', 'mercadoriasFactory',
    function($scope, mercadoriasFactory) {

      mercadoriasFactory.get({}, function(mercadoriasFactory) {
        $scope.mercadorias = mercadoriasFactory;
      });

      $scope.comecaCom = function(texto, inicio) {
        texto = texto.toLowerCase();
        inicio = inicio.toLowerCase();

        return texto.indexOf(inicio) === 0;
      }

      return [];
    }
  ]);
