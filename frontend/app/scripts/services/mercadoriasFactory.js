'use strict';

angular.module('angularComSassApp')
  .factory('mercadoriasFactory', function ($resource) {
    return $resource('http://localhost\\:8080/backend/rest/mercadorias/:referencia', {}, {
      get: {
        method: 'GET',
        cache: true,
        isArray: false
      }
    });
  });
