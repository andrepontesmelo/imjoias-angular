'use strict';

describe('Controller: MercadoriasCtrl', function () {

  // load the controller's module
  beforeEach(module('angularComSassApp'));

  var MercadoriasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();

    var httpMock = $httpBackend;
    httpMock.expectGET("http://localhost:8080/backend/rest/mercadorias").respond(
      {"mercadorias":[{"referencia":"10190100100","faixa":"A"},{"referencia":"10190200100","faixa":"A"},{"referencia":"10190300100","faixa":"A"}]}
    );

    MercadoriasCtrl = $controller('MercadoriasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });

    httpMock.flush();
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('deve retornar 3 objetos do GET', function () {
    expect(scope.mercadorias.length).toBe(3);
  });

  it('deve retornar a faixa da mercadoria', function () {
    expect(scope.mercadorias[0].faixa).toBe("A");
  });

});
