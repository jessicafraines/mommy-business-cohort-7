;(function(){
  'use strict';

  angular.module('mommyApp')
    .controller('ChildController', function($routeParams, childFactory){
      var vm = this,
          id = $routeParams.childId;

      vm.childId = id;

      childFactory.getChildren(function(data){
        vm.children = vm.calcAges(data);
      });

      vm.calcAges = function(children){
        var kids = Object.keys(children);
        kids.forEach(function(k){
          var dob = moment(children[k].dob);
          var now = moment();
          children[k].age = {
            years: now.diff(dob, 'years'),
            months: Math.floor(now.diff(dob, 'months') / 12) + 1
          };
        });
        return children;
      };

      vm.addChild = function(){
        childFactory.createChild(vm.newChild, function(data){
          vm.children= vm.children || {};
          vm.children[data.name] = vm.newChild;
        });
      };

    }) //closes child controller

    .controller('EditController', function($location, $scope, $routeParams, childFactory){
      var vm      = this,
          id      = $routeParams.childId,
      apptId      = $routeParams.apptId,
      growthId    = $routeParams.growthId,
      milestoneId = $routeParams.milestoneId;

      childFactory.getMilestone(id, milestoneId, function(data){
        vm.newMilestone = data;
      });

      vm.addMilestone = function(){
        childFactory.editMilestone(id, milestoneId, vm.newMilestone)
        .success(function(data){
          $location.path('/children/' + id);
        });
      };

      childFactory.getGrowth(id, growthId, function(data){
        vm.newGrowth = data;
      });

      vm.addGrowth = function(){
        childFactory.editGrowth(id, growthId, vm.newGrowth)
          .success(function(data){
            $location.path('/children/' + id);
          });
      };

      childFactory.getAppt(id, apptId, function(data){
        vm.newAppt = data;
      });

      vm.addAppt = function(){
        childFactory.editAppt(id, apptId, vm.newAppt)
          .success(function(data){
            $location.path('/children/' + id);
          });
      };

      vm.cancelForm = function(){
        $location.path('/children/' + id);
      };

    }) //closes edit controller

    .controller('ShowController', function($routeParams, $scope, $location,  childFactory){
      var vm = this,
          id = $routeParams.childId;

      vm.childId = id;
      vm.photo = "";

      vm.savePhoto = function(){
        vm.child.photo = vm.photo.base64;
        childFactory.savePhoto(id, vm.child)
        .success(function(res){
          vm.photo = "";
          $location.path('/children/' + id);
        });
      }

      childFactory.getChild(id, function(data){
        vm.child = data;
      });

      vm.addMilestone = function(){
        childFactory.createMilestone(id, vm.newMilestone, function(data){
          vm.milestones = vm.milestones || {};
          vm.milestones[data.date] = vm.newMilestone;
          $location.path('/children/' + id);
          $scope.$apply();
        });
      };

      childFactory.getMilestones(id, function(data){
        vm.milestones = data;
      });

      vm.deleteMilestone = function(milestoneId){
        childFactory.deleteMilestone(id, milestoneId, function(){
          delete vm.milestones[milestoneId];
        });
      };

      vm.addGrowth = function(){
        childFactory.createGrowth(id, vm.newGrowth, function(data){
          vm.growths = vm.growths || {};
          vm.growths[data.date] = vm.newGrowth;
          $location.path('/children/' + id);
          $scope.$apply();
        });
      };

      childFactory.getGrowths(id, function(data){
        vm.growths = data;
      });

      vm.deleteGrowth = function(growthId){
        childFactory.deleteGrowth(id, growthId, function(){
          delete vm.growths[growthId];
        });
      };

      vm.addAppt = function(){
        childFactory.createAppt(id, vm.newAppt, function(data){
          vm.appts = vm.appts || {};
          vm.appts[data.date] = vm.newAppt;
          $location.path('/children/' + id);
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

      vm.cancelForm = function(){
        $location.path('/children/' + id);
      };

    }) //closes show controller
}());
