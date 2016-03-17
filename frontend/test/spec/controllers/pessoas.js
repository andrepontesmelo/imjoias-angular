'use strict';

describe('Controller: PessoasCtrl', function() {

    // load the controller's module
    beforeEach(module('angularComSassApp'));

    var AboutCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        AboutCtrl = $controller('PessoasCtrl', {
            $scope: scope
        });
    }));
});
