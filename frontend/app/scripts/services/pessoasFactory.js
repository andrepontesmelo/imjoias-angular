'use strict';

angular.module('angularComSassApp')
  .factory('pessoasFactory', ['$resource', function ($resource) {

      return $resource('http://localhost\\:8080/backend/rest/pessoas', {}, {
          get: {
              method: 'GET',
              cache: true,
              isArray: false
          }
      });
  }]);
