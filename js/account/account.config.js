;(function(){
  'use strict';
  angular.module('mommyApp')
  .config(function($routeProvider){
    $routeProvider

    .when('/changePassword', {
      templateUrl: 'views/changepassword.html',
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
