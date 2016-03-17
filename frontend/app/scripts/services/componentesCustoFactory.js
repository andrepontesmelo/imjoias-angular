'use strict';

angular.module('angularComSassApp')
    .factory('componentesCustoFactory', ['$resource', function($resource) {
        return $resource('http://localhost\\:9292/api/v1/componentes', {}, {
            get: {
                method: 'GET',
                cache: true,
                isArray: true
            }
        });
    }]);
