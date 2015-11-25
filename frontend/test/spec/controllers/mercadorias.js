'use strict';

describe('Controller: MercadoriasCtrl', function () {

  // load the controller's module
  beforeEach(module('angularComSassApp'));

  var MercadoriasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MercadoriasCtrl = $controller('MercadoriasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MercadoriasCtrl.awesomeThings.length).toBe(3);
  });
});
