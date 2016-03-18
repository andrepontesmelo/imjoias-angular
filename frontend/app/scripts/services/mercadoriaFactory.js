'use strict';

angular.module('app')
    .factory('mercadoriaFactory', ['$resource', 'componentesCustoFactory', function($resource, componentesCustoFactory) {

        return $resource('http://localhost\\:9292/api/v1/mercadoria/:referencia', { referencia: 'referencia' }, {
            get: {
                method: 'GET',
                cache: false,
                isArray: false
            },
            update: {
                method: 'PUT'
            }
        });
    }]);
