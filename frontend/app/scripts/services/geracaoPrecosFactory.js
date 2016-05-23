'use strict';

angular.module('app')
  .factory('geracaoPrecosFactory', ['$resource', 'constantes',
    function($resource, constantes) {
      return $resource(constantes.url + 'geracaotabela', {}, {
        get: {
          method: 'GET',
          cache: false,
          isArray: true
        }
      });
    }
  ]);
