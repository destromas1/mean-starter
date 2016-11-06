"use strict";

app.controller('signupCtrl', ['$scope', function ($scope) {
  console.log('signupCtrl is running...');

  $scope.model = {
    email: '',
    password : ''
  }

  $scope.signUp = function () {
    console.log('signup...');
  };

}]);
