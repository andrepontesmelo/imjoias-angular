'use strict';

angular.module('app')
    .factory('faixas', ['$resource', function($resource) {
        return $resource('http://localhost\\:9292/api/v1/mercadorias/faixas', {}, {
            get: {
                method: 'GET',
                cache: true,
                isArray: true
            },
            update: {
                method: 'PUT'
            }
        });
    }]);
