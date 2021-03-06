'use strict';

angular.module('app')
  .factory('componentesCustoFactory', ['$resource', 'constantes',
    function($resource, constantes) {
      return $resource(constantes.url + 'componentes', {}, {
        get: {
          method: 'GET',
          cache: true,
          isArray: true
        }
      });
    }
  ]);
