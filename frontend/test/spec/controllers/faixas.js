'use strict';

describe('Controller: FaixasCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var FaixasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FaixasCtrl = $controller('FaixasCtrl', {
      $scope: scope
    });
  }));

    it('deve remover faixa', function() {
        scope.dados.original.listaFaixas = [ 'A', 'B', 'C', 'D', 'E', 'F', 'Z'];
        scope.dados.alterando.listaFaixas = angular.copy(scope.dados.original.listaFaixas);

        scope.removerFaixa('B');
        var arr = scope.dados.alterando.listaFaixas;
        expect(arr).toEqual([ 'A', 'C', 'D', 'E', 'F', 'Z']);
        
        scope.atualizarAlteracoes();
        expect(scope.alteracoes[0]).toBe("Exclusão de faixa B");
    });
});
