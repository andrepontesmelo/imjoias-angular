'use strict';

angular.module('app')
  .controller('GeracaoPrecosCtrl', ['$scope', '$routeParams', 'geracaoPrecosFactory',
    function($scope, $routeParams, geracaoPrecosFactory) {

      geracaoPrecosFactory.get({}, function(geracaoPrecosFactory) {
        $scope.geracaoPrecos  = geracaoPrecosFactory;
      });

      return [];
    }
  ]);
