'use strict';

describe('Controller: MercadoriaCtrl', function() {
  beforeEach(module('app'));

  var MercadoriaCtrl,
    scope;

  beforeEach(inject(function($controller, $rootScope, $httpBackend, $routeParams) {
    scope = $rootScope.$new();

    $routeParams.referenciaMercadoria = "10190300100";

    var httpMock = $httpBackend;

    httpMock.expectGET("http://localhost:9292/api/v1/componentes").respond(
      [{
        "codigo": "0A",
        "nome": "OURO COBRADO COMO 0.800  GR-00",
        "multiplicarcomponentecusto": null,
        "valor": 105.6
      }, {
        "codigo": "10",
        "nome": "DOLAR",
        "multiplicarcomponentecusto": null,
        "valor": 3.99
      }]
    );

    httpMock.expectGET("http://localhost:9292/api/v1/mercadoria/10190300100").respond({
      "mercadoria": {
        "referencia": "10190300100",
        "nome": "Meia Alianca",
        "teor": 750,
        "peso": 1.0,
        "faixa": "A",
        "grupo": 3,
        "digito": true,
        "foradelinha": true,
        "depeso": true
      },
      "componentes": [{
        "mercadoria": "10190300100",
        "componentecusto": "10",
        "quantidade": 1.0
      }],
      "novosPrecos": {
        "mercadoria": "10190300100",
        "novoIndiceAtacado": 1.21,
        "novoPrecoCusto": 125.4
      },
      "novosPrecosVarejo": {
        "mercadoria": "10190300100",
        "novoValorVarejoConsulta": 270.86,
        "novoValorVarejo": 286.92
      },
      "possuiFoto": false
    });

    httpMock.expectGET("http://localhost:9292/api/v1/mercadorias/faixas").respond(
      ["A", "B", "C", "D", "E", "F", "G", "H", "I", "S"]
    );

    MercadoriaCtrl = $controller('MercadoriaCtrl', {
      $scope: scope
    });

    httpMock.flush();
  }));

  it('Deve carregar o nome da mercadoria', function() {
    expect(scope.mercadoria.nome).toBe("Meia Alianca");
  });

  it('Deve carregar a faixa da mercadoria', function() {
    expect(scope.mercadoria.faixa).toBe("A");
  });

  it('Deve carregar o peso da mercadoria', function() {
    expect(scope.mercadoria.peso).toBe(1.0);
  });

  it('Deve carregar a lista de componentes de custo', function() {
    expect(scope.componentes.length).toBe(1);
  });

  it('Deve carregar o código do componente de custo', function() {
    expect(scope.componentes[0].componentecusto).toBe('10');
  });

  it('Deve carregar o nome do componente de custo', function() {
    var ccusto = scope.componentes[0].componentecusto;
    expect(scope.hashComponentes[ccusto]).toBe('DOLAR');
  });

  it('Deve carregar a quantidade do componente de custo', function() {
    expect(scope.componentes[0].quantidade).toBe(1);
  });

  it('Deve permitir exclusão de componente de custo', function() {
    scope.removerComponenteIndice(0);
    expect(scope.componentes.length).toBe(0);
  });

  it('Deve permitir adição de componente de custo', function() {
    scope.novoComponenteCusto.codigo = "AA";
    scope.novoComponenteCusto.nome = "nome";
    scope.novoComponenteCusto.quantidade = 5;

    scope.adicionarComponente();
    expect(scope.componentes.length).toBe(2);
    expect(scope.componentes[1].quantidade).toBe(5);
  });

  it('Deve inicializar novo componente de custo após inserção', function() {
    scope.novoComponenteCusto.nome = "primeiro";
    var componenteAnteriormenteAdicionado = scope.novoComponenteCusto;

    scope.adicionarComponente();

    expect(scope.novoComponenteCusto).not.toEqual(componenteAnteriormenteAdicionado);
  });

  it('Deve carregar novo índice de atacado', function() {
    expect(scope.novosPrecos.novoIndiceAtacado).toBe(1.21);
  });

  it('Deve carregar novo valor de custo', function() {
    expect(scope.novosPrecos.novoPrecoCusto).toBe(125.4);
  });

  it('Deve carregar novo valor de varejo para consulta', function() {
    expect(scope.novosPrecosVarejo.novoValorVarejoConsulta).toBe(270.86);
  });

  it('Deve carregar novo valor de varejo para venda', function() {
    expect(scope.novosPrecosVarejo.novoValorVarejo).toBe(286.92);
  });

  it('Deve salvar nome da mercadoria', function() {
    scope.mercadoria.nome = 'novo nome';
    expect(scope.obterPutJSON().mercadoria.nome).toBe('novo nome');
  });

  it('Deve salvar teor da mercadoria', function() {
    scope.mercadoria.teor = 125;
    expect(scope.obterPutJSON().mercadoria.teor).toBe(125);
  });

  it('Deve salvar peso da mercadoria', function() {
    scope.mercadoria.peso = 25.2;
    expect(scope.obterPutJSON().mercadoria.peso).toBe(25.2);
  });

  it('Deve salvar faixa da mercadoria', function() {
    scope.mercadoria.faixa = 'B';
    expect(scope.obterPutJSON().mercadoria.faixa).toBe('B');
  });

  it('Deve trocar fora de linha da mercadoria', function() {
    var novoForaDeLinha = !scope.mercadoria.foradelinha;

    scope.mercadoria.foradelinha = novoForaDeLinha;
    expect(scope.obterPutJSON().mercadoria.foradelinha).toBe(novoForaDeLinha);
  });

  it('Deve salvar exclusão de todos os componentes de custo', function() {
    scope.removerComponenteIndice(0);
    expect(Object.keys(scope.obterPutJSON().componentes).length).toBe(0);
  });

  it('Deve mostrar o dígito verificador da mercadoria no título ', function() {
    expect(scope.referenciaFormatadaComDigito).toBe('101.903.00.100-1');
  });

  it('Deve gerar JSON para inclusão componente de custo', function() {
    scope.alterar();
    scope.novoComponenteCustoCodigo.codigo = '10';
    scope.alterouCodigoNovoComponenteCusto();
    scope.novoComponenteCusto.quantidade = '50';
    scope.adicionarComponente();

    var componentesJSONEsperado = JSON.stringify([{
      "componentecusto": "10",
      "quantidade": "50"
    }]);

    var jsonGerado = JSON.stringify(scope.obterPutJSON().componentes);

    expect(componentesJSONEsperado).toBe(jsonGerado);
  });
});
