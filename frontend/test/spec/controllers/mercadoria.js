'use strict';

describe('Controller: MercadoriaCtrl', function () {

  // load the controller's module
  beforeEach(module('angularComSassApp'));

  var MercadoriaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $routeParams) {
    scope = $rootScope.$new();

    $routeParams.referenciaMercadoria = "10190300100";

    var httpMock = $httpBackend;
    httpMock.expectGET("http://localhost:8080/backend/rest/mercadorias/10190300100").respond(
      {"mercadoria":{"referencia":"10190300100","faixa":"E"},"componenteCustos":[{"codigo":"30","nome":"OURO COBRADO COMO 0.950  GR-03","quantidade":1.0}]}
    );

    MercadoriaCtrl = $controller('MercadoriaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });

    httpMock.flush();
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('Deve carregar a faixa da mercadoria', function () {
    expect(scope.mercadoria.faixa).toBe("E");
  });

  it('Deve carregar o peso da mercadoria', function () {
    expect(scope.mercadoria.peso).toBe(1.41);
  });

  //it('Deve a lista de componentes de custo', function () {
  //  expect(scope.componenteCustos.length).toBe(1);
  //});

  it('Deve carregar o nome do componente de custo', function () {
    expect(scope.componenteCustos[0].nome).toBe("OURO COBRADO COMO 0.950  GR-03");
  });

});
