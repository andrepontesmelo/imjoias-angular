'use strict';

describe('Filter: titleCase', function () {

  // load the filter's module
  beforeEach(module('app'));

  // initialize a new instance of the filter before each test
  var titleCase;
  beforeEach(inject(function ($filter) {
    titleCase = $filter('titleCase');
  }));

  it('deve deixar apenas a primeira letra maiúscula."', function () {
    var texto = 'apenas a primeira letra.';
    expect(titleCase(texto)).toBe('Apenas a primeira letra.');
  });

    it('deve poder ser aplicado a string vazia."', function () {
    expect(titleCase('')).toBe('');
  });

});
