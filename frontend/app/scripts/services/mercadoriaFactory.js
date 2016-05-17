'use strict';

angular.module('app')
  .factory('mercadoriaFactory', ['$resource', 'componentesCustoFactory', 'constantes',
    function($resource, componentesCustoFactory, constantes) {
      return $resource(constantes.url + 'mercadoria/:referencia', {
        referencia: 'referencia'
      }, {
        get: {
          method: 'GET',
          cache: false,
          isArray: false
        },
        update: {
          method: 'PUT'
        }
      });
    }
  ]);
