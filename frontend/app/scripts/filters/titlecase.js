'use strict';

angular.module('app')
.filter('titleCase', function () {
  return function(input) {
    input = input || '';
    return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
  };
});
