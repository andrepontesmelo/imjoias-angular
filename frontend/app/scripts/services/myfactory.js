'use strict';

angular.module('angularComSassApp')
  .factory('myFactory', function ($resource) {

      return $resource('http://localhost\\:8080/backend/rest/pessoas', {}, {
          query: {
              method: 'GET',
              params: {},
              isArray: false
          }
      });
  });
