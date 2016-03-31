'use strict';

angular
    .module('app', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/pessoas', {
                templateUrl: 'views/pessoas.html',
                controller: 'PessoasCtrl',
                controllerAs: 'pessoas'
            })
            .when('/mercadorias', {
                templateUrl: 'views/mercadorias.html',
                controller: 'MercadoriasCtrl',
                controllerAs: 'mercadorias'
            })
            .when('/mercadoria/:referenciaMercadoria', {
                templateUrl: 'views/mercadoria.html',
                controller: 'MercadoriaCtrl',
                controllerAs: 'mercadoria'
            })
            .when('/faixas', {
                templateUrl: 'views/faixas.html',
                controller: 'FaixasCtrl',
                controllerAs: 'faixas'
            })
            .when('/fornecedores', {
                templateUrl: 'views/fornecedores.html',
                controller: 'FornecedoresCtrl',
                controllerAs: 'fornecedores'
            })
            .when('/precos', {
                templateUrl: 'views/precos.html',
                controller: 'PrecosCtrl',
                controllerAs: 'precos'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
