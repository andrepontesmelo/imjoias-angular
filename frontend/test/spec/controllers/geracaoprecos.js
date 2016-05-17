'use strict';

describe('Controller: GeracaoprecosCtrl', function() {

  beforeEach(module('app'));

  var GeracaoprecosCtrl,
    scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    GeracaoprecosCtrl = $controller('GeracaoPrecosCtrl', {
      $scope: scope
    });
  }));
});
