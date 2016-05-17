'use strict';

describe('Filter: titleCase', function() {
  beforeEach(module('app'));

  var titleCase;
  beforeEach(inject(function($filter) {
    titleCase = $filter('titleCase');
  }));

  it('deve deixar apenas a primeira letra maiúscula."', function() {
    var texto = 'apenas a primeira letra.';
    expect(titleCase(texto)).toBe('Apenas a primeira letra.');
  });

  it('deve poder ser aplicado a string vazia."', function() {
    expect(titleCase('')).toBe('');
  });
});
