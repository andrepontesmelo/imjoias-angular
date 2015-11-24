'use strict';

/**
 * @ngdoc service
 * @name angularComSassApp.myFactory
 * @description
 * # myFactory
 * Factory in the angularComSassApp.
 */
angular.module('angularComSassApp')
  .factory('myFactory', function ($resource) {
    // Service logic
    // ...
    var meaningOfLife = 42;

    // Public API here
//    return {
//      someMethod: function () {
//        return meaningOfLife;
//      }
//    };

        return $resource('http://localhost\\:8080/backend/rest/pessoas', {}, {
            query: {
                method: 'GET',
                params: {},
                isArray: false
            }
        })
  });
