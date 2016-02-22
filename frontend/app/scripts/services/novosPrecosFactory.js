'use strict';

angular.module('angularComSassApp')
  .factory('novosPrecosFactory', function ($resource) {
    return $resource('http://localhost\\:8080/backend/rest/mercadorias/:referencia/novos-preços', {referencia: 'referencia'}, {
      get: {
        method: 'GET',
        cache: true,
        isArray: false
      }
    });
  });
