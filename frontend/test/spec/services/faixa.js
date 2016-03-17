'use strict';

describe('Service: Faixa', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var Faixa;
  beforeEach(inject(function (_Faixa_) {
    Faixa = _Faixa_;
  }));

  it('should do something', function () {
    expect(!!Faixa).toBe(true);
  });

});
