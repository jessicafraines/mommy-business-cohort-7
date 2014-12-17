;(function(){
  'use strict';

  angular.module('mommyApp')
    .controller('ChildController', function($routeParams, childFactory){
      var vm = this,
          id = $routeParams.id;

      childFactory.getChild(id, function(data){
        vm.child = data;
      });
      vm.addChild = function(){
        childFactory.createChild(vm.newChild, function(data){
          vm.children= vm.children || {};
          vm.children[data.name] = vm.newChild;
        });
      };
    }) //closes child controller

    .controller('ChildrenController', function(childFactory){
      var vm = this;

      childFactory.getChildren(function(data){
        vm.children = data;
      });

    }) //closes children controller
}());
