'use strict';

angular.module('app')
  .filter('referenciaFormatada', function() {

    var TAMANHO_MINIMO_REFERENCIA = 11;

    var naoPodeFormatar = function(entrada) {
      return entrada.length < TAMANHO_MINIMO_REFERENCIA
    };

    var possuiDigito = function(entrada) {
      return entrada.length === 12;
    };

    var obterDigito = function(entrada) {
      return entrada.substring(11, 12);
    };

    return function(entrada) {
      if (naoPodeFormatar(entrada)) {
        return entrada;
      }

      return entrada.substring(0, 3) + '.' +
        entrada.substring(3, 6) + '.' +
        entrada.substring(6, 8) + '.' +
        entrada.substring(8, 11) +
        (possuiDigito(entrada) ? '-' + obterDigito(entrada) : '');
    }
  });
