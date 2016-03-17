'use strict';

angular.module('angularComSassApp')
    .factory('componenteCustoHash', ['componentesCustoFactory', function(componentesCustoFactory) {
        var hashComponentes = {};

        componentesCustoFactory.get({}, function(componentesCustoFactory) {
            hashComponentes = {};
            angular.forEach(componentesCustoFactory, function(value) {
                hashComponentes[value.codigo] = value.nome;
            });
        });

        return {
            obterHash: function() {
                return hashComponentes;
            }
        };
    }]);
