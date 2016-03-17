'use strict';

describe('Controller: HeaderCtrl', function() {

    beforeEach(module('angularComSassApp'));

    var HeaderCtrl,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        HeaderCtrl = $controller('HeaderCtrl', {
            $scope: scope
        });
    }));
});
