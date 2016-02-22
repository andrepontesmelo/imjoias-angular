'use strict';

describe('Service: componentesCustoFactory', function () {

  // load the service's module
  beforeEach(module('angularComSassApp'));

  // instantiate service
  var componentesDeCustoFactory;
  beforeEach(inject(function (_componentesCustoFactory_) {
    componentesDeCustoFactory = _componentesCustoFactory_;
  }));

  it('should do something', function () {
    expect(!!componentesDeCustoFactory).toBe(true);
  });

});
