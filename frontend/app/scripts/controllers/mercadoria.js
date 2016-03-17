'use strict';

angular.module('app')
    .controller('MercadoriaCtrl', ['$scope', '$routeParams', 'mercadoriaFactory', 'faixas', 'componentesCustoFactory', 'componenteCustoHash',
        function($scope, $routeParams, mercadoriaFactory, faixas, componentesCustoFactory, componenteCustoHash) {

            mercadoriaFactory.get({ referencia: $routeParams.referenciaMercadoria }, function(mercadoriaFactory) {
                $scope.mercadoria = mercadoriaFactory;

                var hashComponentes = componenteCustoHash.obterHash();

                angular.forEach($scope.mercadoria.componentes, function(value, key) {
                    value.nome = hashComponentes[value.componentecusto];
                });
            });

            componentesCustoFactory.get({}, function(componentesCustoFactory) {
                $scope.componentes = componentesCustoFactory;
            });

            faixas.get({}, function(faixas) {
                $scope.faixas = faixas;
            });

            $scope.referenciaMercadoria = $routeParams.referenciaMercadoria;

            $scope.adicionar = function() {
                this.mercadoria.componentes.push(this.novoComponenteCusto);
                this.novoComponenteCusto = [];
            };

            $scope.remover = function(index) {
                this.mercadoria.componentes.splice(index, 1);
            };

            $scope.novoComponenteCusto = {};

            $scope.obterUrlFoto = function() {
                if (this.mercadoria.possuiFoto)
                    return 'http://localhost:9292/api/v1/mercadoria/' + $scope.referenciaMercadoria + '/foto';
                else
                    return '';
            };

            $scope.salvar = function() {

                var mercadoriaJSON = {};
                mercadoriaJSON.mercadoria = this.mercadoria;
                mercadoriaJSON.componenteCustos = this.componenteCustos;

                mercadoriaFactory.update({ referencia: $routeParams.referenciaMercadoria }, mercadoriaJSON);
            };

            $scope.aba = 1;

            $scope.abaAtiva = function(idx) {
                return $scope.aba === idx;
            };

            $scope.ativeAba = function(idx) {
                $scope.aba = idx;
            };


            $scope.alterouCodigoNovoCC = function() {
                this.novoComponenteCusto.codigo = $scope.novoCC.codigo;
                this.novoComponenteCusto.nome = $scope.novoCC.nome;
            };

            return [];
        }
    ]);
