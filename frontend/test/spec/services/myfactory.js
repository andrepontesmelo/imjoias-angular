'use strict';

describe('Service: myFactory', function () {

  // load the service's module
  beforeEach(module('angularComSassApp'));

  // instantiate service
  var myFactory;
  beforeEach(inject(function (_myFactory_) {
    myFactory = _myFactory_;
  }));

  it('should do something', function () {
    expect(!!myFactory).toBe(true);
  });


});
