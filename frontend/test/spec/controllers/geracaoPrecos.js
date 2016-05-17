'use strict';

describe('Controller: GeracaoPrecosCtrl', function() {

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
