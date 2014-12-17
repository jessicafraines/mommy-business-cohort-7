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
      controller: 'ChildrenController',
      controllerAs: 'children',
      private: true
    })
    .when('/child', {
      templateUrl: 'views/child.html',
      controller: 'ChildController',
      controllerAs: 'child',
      private: true
    })
    .when('/:childId/milestones', {
      templateUrl: 'views/child.html',
      controller: 'ChildController',
      controllerAs: 'child',
      private: true
    })
    .when('/:childId/milestones/new', {
      templateUrl: 'views/addmilestone.html',
      controller: 'ChildController',
      controllerAs: 'child',
      private: true
    })
    .when('/:childId/growths', {
      templateUrl: 'views/child.html',
      controller: 'ChildController',
      controllerAs: 'child',
      private: true
    })
    .when('/:childId/growths/new', {
      templateUrl: 'views/addgrowth.html',
      controller: 'ChildController',
      controllerAs: 'child',
      private: true
    })
    .when('/:childId/appointments', {
      templateUrl: 'views/child.html',
      controller: 'ChildController',
      controllerAs: 'child',
      private: true
    })
    .when('/:childId/appointments/new', {
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
