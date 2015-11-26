'use strict';

describe('Service: pessoasFactory', function () {

  // load the service's module
  beforeEach(module('angularComSassApp'));

  // instantiate service
  var pessoasFactory;
  beforeEach(inject(function (_pessoasFactory_) {
    pessoasFactory = _pessoasFactory_;
  }));

  it('should do something', function () {
    expect(!!pessoasFactory).toBe(true);
  });

});
