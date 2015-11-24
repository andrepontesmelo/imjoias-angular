'use strict';

describe('Service: mercadoriaFactory', function () {

  // load the service's module
  beforeEach(module('angularComSassApp'));

  // instantiate service
  var mercadoriaFactory;
  beforeEach(inject(function (_mercadoriaFactory_) {
    mercadoriaFactory = _mercadoriaFactory_;
  }));

  it('should do something', function () {
    expect(!!mercadoriaFactory).toBe(true);
  });

});
