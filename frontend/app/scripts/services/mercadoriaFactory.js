'use strict';

angular.module('angularComSassApp')
  .factory('mercadoriaFactory', function ($resource) {
    return $resource('http://localhost\\:8080/backend/rest/mercadorias/:referencia', {referencia: 'referencia'}, {
      get: {
        method: 'GET',
        cache: true,
        isArray: false
      }
    });
  });
