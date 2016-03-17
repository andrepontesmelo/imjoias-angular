'use strict';

describe('Service: componenteCustoHash', function() {
    // load the service's module
    beforeEach(module('angularComSassApp'));

    // instantiate service
    var componenteCustoHash;
    beforeEach(inject(function(_componenteCustoHash_) {
        componenteCustoHash = _componenteCustoHash_;
    }));

    it('should do something', function() {
        expect(!!componenteCustoHash).toBe(true);
    });
});
