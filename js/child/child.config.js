;(function(){
  'use strict';
  angular.module('mommyApp')
  .config(function($routeProvider){
    $routeProvider

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

    .when('/children/:childId/vacs', {
      templateUrl: 'views/vac.html',
      controller: 'ShowController',
      controllerAs: 'show',
      private: true
    })

    .when('/children/:childId/vacs/new', {
      templateUrl: 'views/addvac.html',
      controller: 'ShowController',
      controllerAs: 'show',
      private: true
    })

    .when('/children/:childId/vacs/:vacId/edit', {
      templateUrl: 'views/addvac.html',
      controller: 'EditController',
      controllerAs: 'show',
      private: true
    })

    .when('/children/:childId/drs', {
      templateUrl: 'views/dr.html',
      controller: 'ShowController',
      controllerAs: 'show',
      private: true
    })

    .when('/children/:childId/drs/new', {
      templateUrl: 'views/adddr.html',
      controller: 'ShowController',
      controllerAs: 'show',
      private: true
    })

    .when('/children/:childId/drs/:drId/edit', {
      templateUrl: 'views/adddr.html',
      controller: 'EditController',
      controllerAs: 'show',
      private: true
    })

    .when('/children/:childId/meds', {
      templateUrl: 'views/med.html',
      controller: 'ShowController',
      controllerAs: 'show',
      private: true
    })

    .when('/children/:childId/meds/new', {
      templateUrl: 'views/addmed.html',
      controller: 'ShowController',
      controllerAs: 'show',
      private: true
    })

    .when('/children/:childId/meds/:medId/edit', {
      templateUrl: 'views/addmed.html',
      controller: 'EditController',
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

    .when('/children/:childId/milestones/:milestoneId/edit', {
      templateUrl: 'views/addmilestone.html',
      controller: 'EditController',
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

    .when('/children/:childId/growths/:growthId/edit', {
      templateUrl: 'views/addgrowth.html',
      controller: 'EditController',
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
      controllerAs: 'show',
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
