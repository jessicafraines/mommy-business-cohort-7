;(function(){
  'use strict';
  angular.module('mommyApp')
  .config(function($routeProvider){
    $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController',
      controllerAs: 'login',
      resolve: {
        data: function(accountFactory){
          accountFactory.disallowLogin();
        }
      }
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegisterController',
      controllerAs: 'register'
    })
    .when('/changePassword', {
      templateUrl: 'views/change.password.html',
      controller: 'ChangePasswordController',
      controllerAs: 'changepw',
      private: true
    })
    .when('/logout', {
      template: '',
      controller: 'LogoutController'
    })
    .otherwise({redirectTo: '/'});
  })
  .run(function($rootScope, accountFactory){
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, priorRoute){
      if(nextRoute.$$route && nextRoute.$$route.private){
        accountFactory.requireLogin();
      }
    })
  })
}());
