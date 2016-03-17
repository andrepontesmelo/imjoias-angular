'use strict';

describe('Service: mercadoriasFactory', function() {

    // load the service's module
    beforeEach(module('app'));

    // instantiate service
    var mercadoriasFactory;
    beforeEach(inject(function(_mercadoriasFactory_) {
        mercadoriasFactory = _mercadoriasFactory_;
    }));

    it('should do something', function() {
        expect(!!mercadoriasFactory).toBe(true);
    });

});
