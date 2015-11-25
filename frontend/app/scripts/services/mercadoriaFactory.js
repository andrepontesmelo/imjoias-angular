'use strict';

/**
 * @ngdoc service
 * @name angularComSassApp.mercadoriaFactory
 * @description
 * # mercadoriaFactory
 * Factory in the angularComSassApp.
 */
angular.module('angularComSassApp')
  .factory('mercadoriaFactory', function ($resource) {
    return $resource('http://localhost\\:8080/backend/rest/mercadorias', {}, {
      query: {
        method: 'GET',
        params: {},
        isArray: false
      }
    });
  });
