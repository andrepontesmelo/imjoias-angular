'use strict';

describe('Controller: PessoasCtrl', function() {

    beforeEach(module('angularComSassApp'));

    var AboutCtrl,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        AboutCtrl = $controller('PessoasCtrl', {
            $scope: scope
        });
    }));
});
