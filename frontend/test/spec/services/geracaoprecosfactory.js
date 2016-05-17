'use strict';

describe('Service: geracaoPrecosFactory', function() {
  beforeEach(module('app'));

  var geracaoPrecosFactory;
  beforeEach(inject(function(_geracaoPrecosFactory_) {
    geracaoPrecosFactory = _geracaoPrecosFactory_;
  }));

  it('should do something', function() {
    expect(!!geracaoPrecosFactory).toBe(true);
  });
});
