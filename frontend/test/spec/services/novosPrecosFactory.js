'use strict';

describe('Service: novosPrecos', function () {

  // load the service's module
  beforeEach(module('angularComSassApp'));

  // instantiate service
  var novosPrecosFactory;
  beforeEach(inject(function (_novosPrecosFactory_) {
    novosPrecosFactory = _novosPrecosFactory_;
  }));

  it('should do something', function () {
    expect(!!novosPrecosFactory).toBe(true);
  });

});
