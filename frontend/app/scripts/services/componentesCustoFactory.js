'use strict';

angular.module('angularComSassApp')
  .factory('componentesCustoFactory', ['$resource', function ($resource) {

    return $resource('http://localhost\\:8080/backend/rest/componentesdecusto', {}, {
      get: {
        method: 'GET',
        cache: true,
        isArray: false
      }
    });
  }]);
