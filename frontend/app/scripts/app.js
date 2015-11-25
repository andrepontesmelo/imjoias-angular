'use strict';

/**
 * @ngdoc overview
 * @name angularComSassApp
 * @description
 * # angularComSassApp
 *
 * Main module of the application.
 */
angular
  .module('angularComSassApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
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
      .otherwise({
        redirectTo: '/'
      });
  });
