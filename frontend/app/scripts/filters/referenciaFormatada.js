'use strict';

angular.module('app')
  .filter('referenciaFormatada', function() {
    return function(entrada) {

      var TAMANHO_MINIMO_REFERENCIA = 11;

      if (entrada.length < TAMANHO_MINIMO_REFERENCIA) {
        return entrada;
      }

      var entradaFormatada;

      entradaFormatada = entrada.substring(0, 3) + '.' +
        entrada.substring(3, 6) + '.' +
        entrada.substring(6, 8) + '.' +
        entrada.substring(8, 11);

      var entradaPossuiDigito = entrada.length === 12;

      if (entradaPossuiDigito) {
        var digito = entrada.substring(11, 12);
        entradaFormatada += '-' + digito;
      }

      return entradaFormatada;
    };
  });
