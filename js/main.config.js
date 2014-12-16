;(function(){
  'use strict';
  angular.module('mommyApp')
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
  .otherwise({redirectTo: '/'});
  })
}());
