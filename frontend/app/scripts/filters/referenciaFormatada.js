'use strict';

angular.module('app')
    .filter('referenciaFormatada', function() {
        return function(input) {
            if (input.length < 11) {
                return input;
            } else {
                var resultado;

                resultado = input.substring(0, 3) + '.' +
                    input.substring(3, 6) + '.' +
                    input.substring(6, 8) + '.' +
                    input.substring(8, 11);

                if (input.length === 12) {
                    resultado += '-' + input.substring(11, 12);
                }

                return resultado;
            }
        };
    });
