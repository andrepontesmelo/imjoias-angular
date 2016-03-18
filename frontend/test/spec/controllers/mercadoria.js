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
            [{ "codigo": "0A", "nome": "OURO COBRADO COMO 0.800  GR-00", "multiplicarcomponentecusto": null, "valor": 105.6 }, { "codigo": "10", "nome": "DOLAR", "multiplicarcomponentecusto": null, "valor": 3.99 }]
        );

        httpMock.expectGET("http://localhost:9292/api/v1/mercadoria/10190300100").respond({ "referencia": "10190300100", "nome": "Meia AlianÃ§a", "teor": 750, "peso": 1.0, "faixa": "A", "grupo": 3, "digito": true, "foradelinha": true, "depeso": true, "componentes": [{ "mercadoria": "10190300100", "componentecusto": "10", "quantidade": 1.0 }], "novosPrecos": { "mercadoria": "10190300100", "novoIndiceAtacado": 1.21, "novoPrecoCusto": 125.4 }, "novosPrecosVarejo": { "mercadoria": "10190300100", "novoValorVarejoConsulta": 270.86, "novoValorVarejo": 286.92 }, "possuiFoto": false });

        httpMock.expectGET("http://localhost:9292/api/v1/mercadorias/faixas").respond(
            ["A", "B", "C", "D", "E", "F", "G", "H", "I", "S"]
        );


        MercadoriaCtrl = $controller('MercadoriaCtrl', {
            $scope: scope
        });

        httpMock.flush();
    }));

    it('Deve carregar a faixa da mercadoria', function() {
        expect(scope.mercadoria.faixa).toBe("A");
    });

    it('Deve carregar o peso da mercadoria', function() {
        expect(scope.mercadoria.peso).toBe(1.0);
    });

    it('Deve carregar a lista de componentes de custo', function() {
        expect(scope.mercadoria.componentes.length).toBe(1);
    });

    it('Deve carregar o código do componente de custo', function() {
        expect(scope.mercadoria.componentes[0].componentecusto).toBe('10');
    });

    it('Deve carregar o nome do componente de custo', function() {
        var ccusto = scope.mercadoria.componentes[0].componentecusto
        expect(scope.hashComponentes[ccusto]).toBe('DOLAR');
    });

    it('Deve carregar a quantidade do componente de custo', function() {
        expect(scope.mercadoria.componentes[0].quantidade).toBe(1);
    });

    it('Deve permitir exclusão de componente de custo', function() {
        scope.remover(0);
        expect(scope.mercadoria.componentes.length).toBe(0);
    });

    it('Deve permitir adição de componente de custo', function() {
        scope.novoComponenteCusto.codigo = "AA";
        scope.novoComponenteCusto.nome = "nome";
        scope.novoComponenteCusto.quantidade = 5;

        scope.adicionar();
        expect(scope.mercadoria.componentes.length).toBe(2);
        expect(scope.mercadoria.componentes[1].quantidade).toBe(5);
    });

    it('Deve inicializar novo componente de custo após inserção', function() {
        scope.novoComponenteCusto.nome = "primeiro";
        var componenteAnteriormenteAdicionado = scope.novoComponenteCusto;

        scope.adicionar();

        expect(scope.novoComponenteCusto).not.toEqual(componenteAnteriormenteAdicionado);
    });

    it('Deve carregar novo índice de atacado', function() {
        expect(scope.mercadoria.novosPrecos.novoIndiceAtacado).toBe(1.21);
    });

    it('Deve carregar novo valor de custo', function() {
        expect(scope.mercadoria.novosPrecos.novoPrecoCusto).toBe(125.4);
    });

    it('Deve carregar novo valor de varejo para consulta', function() {
        expect(scope.mercadoria.novosPrecosVarejo.novoValorVarejoConsulta).toBe(270.86);
    });

    it('Deve carregar novo valor de varejo para venda', function() {
        expect(scope.mercadoria.novosPrecosVarejo.novoValorVarejo).toBe(286.92);
    });
});
