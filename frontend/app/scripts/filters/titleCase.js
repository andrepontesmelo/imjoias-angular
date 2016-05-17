'use strict';

angular.module('app')
  .filter('titleCase', function() {
    return function(entrada) {
      entrada = entrada || '';

      var primeiraLetra = entrada.charAt(0).toUpperCase();
      var restante = entrada.substr(1).toLowerCase();

      return primeiraLetra + restante;
    };
  });
