'use strict';

angular.module('angularComSassApp')
  .factory('componentesDeCustoFactory', ['$resource', function ($resource) {

    return $resource('http://localhost\\:8080/backend/rest/componentesdecusto', {}, {
      get: {
        method: 'GET',
        cache: true,
        isArray: false
      }
    });
  }]);
