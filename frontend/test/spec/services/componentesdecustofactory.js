'use strict';

describe('Service: componentesDeCustoFactory', function () {

  // load the service's module
  beforeEach(module('angularComSassApp'));

  // instantiate service
  var componentesDeCustoFactory;
  beforeEach(inject(function (_componentesDeCustoFactory_) {
    componentesDeCustoFactory = _componentesDeCustoFactory_;
  }));

  it('should do something', function () {
    expect(!!componentesDeCustoFactory).toBe(true);
  });

});
