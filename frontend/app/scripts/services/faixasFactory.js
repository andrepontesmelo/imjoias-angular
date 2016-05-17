'use strict';

angular.module('app')
  .factory('faixas', ['$resource', 'constantes',
    function($resource, constantes) {
      return $resource(constantes.url + 'mercadorias/faixas', {}, {
        get: {
          method: 'GET',
          cache: true,
          isArray: true
        },
        update: {
          method: 'PUT'
        }
      });
    }
  ]);
