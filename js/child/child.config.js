;(function(){
  'use strict';
  angular.module('mommyApp')
  .config(function($routeProvider){
    $routeProvider
    .when('/new', {
      templateUrl: 'views/addchild.html',
      controller: 'ChildController',
      controllerAs: 'child',
      private: true
    })
    .when('/newMilestone', {
      templateUrl: 'views/addmilestone.html',
      controller: 'ChildController',
      controllerAs: 'child',
      private: true
    })
    .when('/newGrowth', {
      templateUrl: 'views/addgrowth.html',
      controller: 'ChildController',
      controllerAs: 'child',
      private: true
    })
    .when('/newAppointment', {
      templateUrl: 'views/addappt.html',
      controller: 'ChildController',
      controllerAs: 'child',
      private: true
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
