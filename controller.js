angular.module('userProfiles')
.controller('mainController', ['$scope', 'mainService', function($scope, mainService) {

  $scope.users
  $scope.getUsersB = function() {
    $scope.users = mainService.getUsersA();
  }
  $scope.getUsersB();

}])
