;(function(){
  'use strict';

  angular.module('mommyApp')
    .controller('ChildController', function($routeParams, childFactory){
      var vm = this,
          id = $routeParams.childId;
    vm.childId = id;

      childFactory.getChildren(function(data){
        vm.children = data;
      });
      vm.addChild = function(){
        childFactory.createChild(vm.newChild, function(data){
          vm.children= vm.children || {};
          vm.children[data.name] = vm.newChild;
        });
      };
    }) //closes child controller

    .controller('EditController', function($routeParams, childFactory){
      var vm = this,
          id = $routeParams.childId,
      apptId = $routeParams.apptId;

      childFactory.getAppt(id, apptId, function(data){
        vm.newAppt = data;
      });

      vm.addItem = function(apptId){
        childFactory.editItem(id, apptId, vm.newAppt);
      };
    }) //closes edit controller
    .controller('ShowController', function($routeParams, $location, childFactory){
      var vm = this,
          id = $routeParams.childId;
    vm.childId = id;

      childFactory.getChild(id, function(data){
        vm.child = data;
      });
      vm.addAppt = function(){
        childFactory.createAppt(id, vm.newAppt, function(data){
          vm.appts = vm.appts || {};
          vm.appts[data.date] = vm.newAppt;
          $location.path('/children/:id');
        });
      };
      childFactory.getAppts(id, function(data){
        vm.appts = data;
      });

      vm.deleteAppt = function(apptId){
        childFactory.deleteAppt(id, apptId, function(){
          delete vm.appts[apptId];
        });
      };

    }) //closes show controller
}());
