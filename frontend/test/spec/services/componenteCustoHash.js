'use strict';

describe('Service: componenteCustoHash', function() {
    beforeEach(module('angularComSassApp'));

    var componenteCustoHash;
    beforeEach(inject(function(_componenteCustoHash_) {
        componenteCustoHash = _componenteCustoHash_;
    }));

    it('should do something', function() {
        expect(!!componenteCustoHash).toBe(true);
    });
});
