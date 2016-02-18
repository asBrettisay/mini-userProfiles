angular.module('userProfiles')
.controller('mainController', ['$scope', 'mainService', function($scope, mainService) {

  $scope.getUsers = function() {
    mainService.getUsers().then(function(response) {
      $scope.users = response;
    });
  }
  $scope.getUsers();

}])
