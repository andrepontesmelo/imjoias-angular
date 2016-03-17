'use strict';

describe('Service: componentesCustoFactory', function() {
    beforeEach(module('angularComSassApp'));

    var componentesDeCustoFactory;
    beforeEach(inject(function(_componentesCustoFactory_) {
        componentesDeCustoFactory = _componentesCustoFactory_;
    }));

    it('should do something', function() {
        expect(!!componentesDeCustoFactory).toBe(true);
    });
});
