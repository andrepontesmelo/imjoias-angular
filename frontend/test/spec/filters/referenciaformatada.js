'use strict';

describe('Filter: referenciaFormatada', function () {

  // load the filter's module
  beforeEach(module('angularComSassApp'));

  // initialize a new instance of the filter before each test
  var referenciaFormatada;
  beforeEach(inject(function ($filter) {
    referenciaFormatada = $filter('referenciaFormatada');
  }));

  it('should return the input formated"', function () {
    var text = '1234567890123';
    expect(referenciaFormatada(text)).toBe('123.456.78.012-3');
  });

});
