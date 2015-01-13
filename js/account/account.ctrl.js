;(function(){
  'use strict';
  angular.module('mommyApp')

  .controller('LoginController', function($scope, $location, $route, accountFactory) {
    var vm = this;

    vm.login = function() {
      $route.reload();
      accountFactory.login(vm.email, vm.password, function() {
        $location.path('/children');
        $scope.$apply();
      });
    }; 

    vm.forgotPassword = function() {
      accountFactory.resetPassword(vm.email);
    };

    vm.register = function(){ 
      accountFactory.register(vm.email, vm.password, function() {
        vm.login();
      });
    }; 

  }) //close login cntrl   
  
  .controller('LogoutController', function($scope, $location, accountFactory) {
    accountFactory.logout(function() {
      $location.path('/');
      $scope.$apply();
    });

  }) //close logout cntrl

  .controller('ChangePasswordController', function($scope, $route, $location, accountFactory) {
    var vm = this;

    vm.changePassword = function() {
      accountFactory.changePassword(vm.oldPassword, vm.newPassword, function() {
        $location.path('/children');
        $scope.$apply();
      })
    };
  }) //close change pass cntrl
}()); //close iife
