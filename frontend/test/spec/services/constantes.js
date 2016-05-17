'use strict';

describe('Service: constantes', function() {
  beforeEach(module('app'));

  var constantes;
  beforeEach(inject(function(_constantes_) {
    constantes = _constantes_;
  }));

  it('deve possuir url', function() {
    expect(constantes.url).toContain('http');
  });
});
