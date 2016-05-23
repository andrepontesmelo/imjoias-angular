'use strict';

describe('Service: abas', function() {
  beforeEach(module('app'));

  var abas;
  beforeEach(inject(function(_abas_) {
    abas = _abas_;
    abas.inicializa(abas);
  }));

  it('deve ativar a primeira aba inicialmente', function() {
    expect(abas.abaAtiva).toBe(1);
  });

  it('deve ativar outras abas', function() {
    abas.ativeAba(2);
    expect(abas.abaAtiva).toBe(2);
  });

  it('deve verificar uma aba ativa', function() {
    abas.ativeAba(5);
    expect(abas.verificaAbaAtiva(5)).toBeTruthy();
  });

  it('deve verificar uma aba não ativa', function() {
    abas.ativeAba(5);
    expect(abas.verificaAbaAtiva(7)).toBeFalsy();
  });

});
