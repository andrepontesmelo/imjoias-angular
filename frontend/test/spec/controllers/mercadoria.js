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
      {"mercadoria":{"referencia":"10190300100","faixa":"A","nome":"Meia AlianÃ§a","teor":750,"peso":1.0,"foraDeLinha":true},"componenteCustos":[{"codigo":"30","nome":"OURO COBRADO COMO 0.950  GR-03","quantidade":1.0}]}
    );

    httpMock.expectGET("http://localhost:8080/backend/rest/mercadorias/10190300100/novos-preços").respond(
      {"novosPrecos":{"novoIndiceAtacado":1.16,"novoPrecoCusto":119.7}}
    );

    httpMock.expectGET("http://localhost:8080/backend/rest/componentesdecusto").respond(
      {"componentes":[{"codigo":"0A","nome":"OURO COBRADO COMO 0.800  GR-00"},{"codigo":"10","nome":"DOLAR"},
        {"codigo":"19","nome":"CONSERTOS EM GERAL"},{"codigo":"1A","nome":"OURO COBRADO COMO 0.850  GR-01"}]}
    );



      MercadoriaCtrl = $controller('MercadoriaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });

    httpMock.flush();
  }));

  it('Deve carregar a faixa da mercadoria', function () {
    expect(scope.mercadoria.faixa).toBe("A");
  });

  it('Deve carregar o peso da mercadoria', function () {
    expect(scope.mercadoria.peso).toBe(1.0);
  });

  it('Deve a lista de componentes de custo', function () {
    expect(scope.componenteCustos.length).toBe(1);
  });

  it('Deve carregar o nome do componente de custo', function () {
    expect(scope.componenteCustos[0].nome).toBe("OURO COBRADO COMO 0.950  GR-03");
  });

  it('Deve permitir exclusão de componente de custo', function () {
    scope.remover(0);
    expect(scope.componenteCustos.length).toBe(0);
  });

  it('Deve permitir adição de componente de custo', function () {
    scope.novoComponenteCusto.codigo = "AA";
    scope.novoComponenteCusto.nome = "nome";
    scope.novoComponenteCusto.quantidade = 5;

    scope.adicionar();
    expect(scope.componenteCustos.length).toBe(2);
    expect(scope.componenteCustos[1].quantidade).toBe(5);
  });

  it('Deve inicializar novo componente de custo após inserção', function () {
    scope.novoComponenteCusto.nome = "primeiro";
    var componenteAnteriormenteAdicionado = scope.novoComponenteCusto;

    scope.adicionar();

    expect(scope.novoComponenteCusto).not.toEqual(componenteAnteriormenteAdicionado);
  });

});
