'use strict';

describe('Controller: HeaderCtrl', function() {

    beforeEach(module('app'));

    var HeaderCtrl,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        HeaderCtrl = $controller('HeaderCtrl', {
            $scope: scope
        });
    }));
});
