'use strict';

angular.module('app')
  .factory('mercadoriasFactory', function($resource, constantes) {
    return $resource(constantes.url + 'mercadorias/', {}, {
      get: {
        method: 'GET',
        cache: true,
        isArray: true
      }
    });
  });
