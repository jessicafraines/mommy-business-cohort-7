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
    .when('/children', {
      templateUrl: 'views/children.html',
      controller: 'ChildController',
      controllerAs: 'child',
      private: true
    })
    .when('/children/:childId', {
      templateUrl: 'views/child.html',
      controller: 'ShowController',
      controllerAs: 'show',
      private: true
    })
    .when('/children/:childId/milestones', {
      templateUrl: 'views/child.html',
      controller: 'ShowController',
      controllerAs: 'show',
      private: true
    })
    .when('/children/:childId/milestones/new', {
      templateUrl: 'views/addmilestone.html',
      controller: 'ShowController',
      controllerAs: 'show',
      private: true
    })
    .when('/children/children/:childId/growths', {
      templateUrl: 'views/child.html',
      controller: 'ShowController',
      controllerAs: 'show',
      private: true
    })
    .when('/children/:childId/growths/new', {
      templateUrl: 'views/addgrowth.html',
      controller: 'ShowController',
      controllerAs: 'show',
      private: true
    })
    .when('/children/:childId/appointments', {
      templateUrl: 'views/child.html',
      controller: 'ShowController',
      controllerAs: 'show',
      private: true
    })
    .when('/children/:childId/appointments/new', {
      templateUrl: 'views/addappt.html',
      controller: 'ShowController',
      controllerAs: 'show',
      private: true
    })
    .when('/children/:childId/appointments/:apptId/edit', {
      templateUrl: 'views/addappt.html',
      controller: 'EditController',
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
