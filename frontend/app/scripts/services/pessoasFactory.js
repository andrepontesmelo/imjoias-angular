'use strict';

angular.module('app')
    .factory('pessoasFactory', ['$resource', function($resource) {
        return $resource('http://localhost\\:9292/api/v1/pessoas/', {}, {
            get: {
                method: 'GET',
                cache: true,
                isArray: true
            }
        });
    }]);
