;(function(){
  'use strict';
  angular.module('mommyApp')
  .controller('RegisterController', function(accountFactory){
    var vm = this;

    vm.register = function(){
      accountFactory.register(vm.email, vm.password, function(){
        vm.login();
      });
    }; //close register
  }) //close register cntrl

  .controller('LoginController', function($scope, $location, accountFactory){
    var vm = this;
    vm.login = function(){
      accountFactory.login(vm.email, vm.password, function(){
        $location.path('/children');
        $scope.$apply();
      });
    }; //close login
    vm.forgotPassword = function(){
      accountFactory.resetPassword(vm.email);
    };
  }) //close login cntrl   
  
  .controller('LogoutController', function($scope, $location, accountFactory){
    accountFactory.logout(function(){
      $location.path('/login');
      $scope.$apply();
    });
  }) //close logout cntrl

  .controller('ChangePasswordController', function($scope, $location, accountFactory){
    var vm = this;
    vm.changePassword = function(){
      accountFactory.changePassword(vm.oldPass, vm.newPass, function(){
        $location.path('/logout');
        $scope.$apply();
      })
    };
  }) //close change pass cntrl
}()); //close iife
