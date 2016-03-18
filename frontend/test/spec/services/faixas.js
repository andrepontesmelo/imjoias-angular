'use strict';

describe('Service: faixas', function() {

    beforeEach(module('app'));

    var faixas;
    beforeEach(inject(function(_faixas_) {
        faixas = _faixas_;
    }));

    it('should do something', function() {
        expect(!!faixas).toBe(true);
    });

});
