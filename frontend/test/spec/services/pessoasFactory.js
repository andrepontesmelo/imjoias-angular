'use strict';

describe('Service: pessoasFactory', function() {

    beforeEach(module('angularComSassApp'));

    var pessoasFactory;
    beforeEach(inject(function(_pessoasFactory_) {
        pessoasFactory = _pessoasFactory_;
    }));

    it('should do something', function() {
        expect(!!pessoasFactory).toBe(true);
    });

});
