'use strict';

describe('Controller: MercadoriaCtrl', function () {

  // load the controller's module
  beforeEach(module('angularComSassApp'));

  var MercadoriaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MercadoriaCtrl = $controller('MercadoriaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MercadoriaCtrl.awesomeThings.length).toBe(3);
  });
});
