'use strict';
describe('Controller: MercadoriasCtrl', function() {

    beforeEach(module('app'));

    var MercadoriasCtrl,
        scope;

    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
        scope = $rootScope.$new();

        var httpMock = $httpBackend;
        httpMock.expectGET("http://localhost:9292/api/v1/mercadorias").respond(
            [{ "referencia": "10000101035", "nome": "Brilhante 0.0057k", "teor": 750, "peso": 0.01, "faixa": "C", "grupo": null, "digito": true, "foradelinha": false, "depeso": false }, { "referencia": "10000101045", "nome": "Brilhante 0.0141 K", "teor": 750, "peso": 0.0, "faixa": "C", "grupo": null, "digito": true, "foradelinha": false, "depeso": false }, { "referencia": "10000101055", "nome": "Brilhante 0.0168 K", "teor": 750, "peso": 0.01, "faixa": "C", "grupo": null, "digito": true, "foradelinha": false, "depeso": false }]
        );

        MercadoriasCtrl = $controller('MercadoriasCtrl', {
            $scope: scope
        });

        httpMock.flush();
    }));

    it('deve retornar 3 objetos do GET', function() {
        expect(scope.mercadorias.length).toBe(3);
    });

    it('deve retornar a faixa da mercadoria', function() {
        expect(scope.mercadorias[0].faixa).toBe("C");
    });
});
