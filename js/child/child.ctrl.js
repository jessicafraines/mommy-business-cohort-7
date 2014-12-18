;(function(){
  'use strict';

  angular.module('mommyApp')
    .controller('ChildController', function($routeParams, childFactory){
      var vm = this,
          id = $routeParams.childId;

      childFactory.getChildren(function(data){
        vm.children = data;
      });
      vm.addChild = function(){
        childFactory.createChild(vm.newChild, function(data){
          vm.children= vm.children || {};
          vm.children[data.name] = vm.newChild;
        });
      };
      vm.addAppt = function(){
        childFactory.createAppt(id, vm.newAppt, function(data){
          vm.appts = vm.appts || {};
          vm.appts[data.date] = vm.newAppt;
        });
      };
      childFactory.getAppts(id, function(data){
        vm.appts = data;
      });
    }) //closes child controller

   /* .controller('ChildrenController', function(childFactory){
      var vm = this;


    }) //closes children controller*/
}());
