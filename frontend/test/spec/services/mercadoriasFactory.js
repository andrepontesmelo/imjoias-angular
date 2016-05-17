'use strict';

describe('Service: mercadoriasFactory', function() {
  beforeEach(module('app'));

  var mercadoriasFactory;
  beforeEach(inject(function(_mercadoriasFactory_) {
    mercadoriasFactory = _mercadoriasFactory_;
  }));

  it('should do something', function() {
    expect(!!mercadoriasFactory).toBe(true);
  });
});
