'use strict';

describe('Filter: referenciaFormatada', function() {

    // load the filter's module
    beforeEach(module('angularComSassApp'));

    // initialize a new instance of the filter before each test
    var referenciaFormatada;
    beforeEach(inject(function($filter) {
        referenciaFormatada = $filter('referenciaFormatada');
    }));

    it('deve formatar referência de 12 caracteres com digito"', function() {
        var text = '101906001009';
        expect(referenciaFormatada(text)).toBe('101.906.00.100-9');
    });

    it('deve formatar referência de 11 caracteres sem digito"', function() {
        var text = '10190600100';
        expect(referenciaFormatada(text)).toBe('101.906.00.100');
    });

    it('não deve formatar referência de menos de 11 caracteres"', function() {
        var text = '555';
        expect(referenciaFormatada(text)).toBe(text);
    });
});
