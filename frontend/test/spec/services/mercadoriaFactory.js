'use strict';

describe('Service: mercadoriaFactory', function() {
    beforeEach(module('app'));

    var mercadoriaFactory;
    beforeEach(inject(function(_mercadoriaFactory_) {
        mercadoriaFactory = _mercadoriaFactory_;
    }));

    it('should do something', function() {
        expect(!!mercadoriaFactory).toBe(true);
    });

});
