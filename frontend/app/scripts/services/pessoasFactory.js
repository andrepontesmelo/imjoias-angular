'use strict';

angular.module('app')
  .factory('pessoasFactory', ['$resource', 'constantes', function($resource, constantes) {
    return $resource(constantes.url + 'pessoas/', {}, {
      get: {
        method: 'GET',
        cache: true,
        isArray: true
      }
    });
  }]);
