'use strict';

/**
 * @ngdoc filter
 * @name angularComSassApp.filter:referenciaFormatada
 * @function
 * @description
 * # referenciaFormatada
 * Filter in the angularComSassApp.
 */
angular.module('angularComSassApp')
  .filter('referenciaFormatada', function () {
    return function (input) {
      return 'referenciaFormatada filter: ' + input;
    };
  });
