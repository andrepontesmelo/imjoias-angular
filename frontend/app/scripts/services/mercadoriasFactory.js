'use strict';

angular.module('angularComSassApp')
  .factory('mercadoriasFactory', function ($resource) {
    return $resource('http://localhost\\:9292/api/v1/mercadorias/', {}, {
      get: {
        method: 'GET',
        cache: true,
        isArray: true
      }
    });
  });
