;(function(){
  'use strict';

  angular.module('mommyApp')
    .controller('ChildController', function($routeParams, $route, $location, childFactory) {
      var vm = this,
          id = $routeParams.childId;

      vm.childId = id;

      childFactory.getChildren(function(data) {
        vm.children = vm.calcAges(data);
      });

      vm.calcAges = function(children) {
        var kids = Object.keys(children);
        kids.forEach(function(k) {
          var dob = moment(children[k].dob);
          var now = moment();
          children[k].age = {
            years: now.diff(dob, 'years'),
            months: Math.floor(now.diff(dob, 'months')) + 1
          };
        });
        return children;
      };

      vm.addChild = function() {
        childFactory.createChild(vm.newChild)
          .success(function(data) {
            vm.children= vm.children || {};
            vm.children[data.name] = vm.newChild;
            $location.path('/children')
            $route.reload();
        });
      };

      vm.deleteKid = function(id) {
        childFactory.deleteKid(id, function() { 
            delete vm.children[id];
            $route.reload();
        });
      };

    }) //closes child controller

    .controller('EditController', function($location, $scope, $routeParams, childFactory) {
      var vm      = this,
          id      = $routeParams.childId,
      vacId       = $routeParams.vacId,
      drId        = $routeParams.drId,
      medId       = $routeParams.medId,
      apptId      = $routeParams.apptId,
      growthId    = $routeParams.growthId,
      milestoneId = $routeParams.milestoneId;

      childFactory.getVac(id, vacId, function(data) {
        vm.newVac = data;
      });

      childFactory.getDr(id, drId, function(data) {
        vm.newDr = data;
      });

      childFactory.getMed(id, medId, function(data) {
        vm.newMed = data;
      });

      childFactory.getMilestone(id, milestoneId, function(data) {
        vm.newMilestone = data;
      });

      childFactory.getAppt(id, apptId, function(data) {
        vm.newAppt = data;
      });
      
      childFactory.getGrowth(id, growthId, function(data) {
        vm.newGrowth = data;
      });

      vm.addVac = function() {
        childFactory.editVac(id, vacId, vm.newVac)
        .success(function(data) {
          $location.path('/children/' + id);
        });
      };

      vm.addDr = function() {
        childFactory.editDr(id, drId, vm.newDr)
        .success(function(data) {
          $location.path('/children/' + id);
        });
      };

      vm.addMed = function() {
        childFactory.editMed(id, medId, vm.newMed)
        .success(function(data) {
          $location.path('/children/' + id);
        });
      };

      vm.addMilestone = function() {
        childFactory.editMilestone(id, milestoneId, vm.newMilestone)
        .success(function(data) {
          $location.path('/children/' + id);
        });
      };

      vm.addAppt = function() {
        childFactory.editAppt(id, apptId, vm.newAppt)
        .success(function(data) {
          $location.path('/children/' + id);
        });
      };

      vm.addGrowth = function() {
        childFactory.editGrowth(id, growthId, vm.newGrowth)
        .success(function(data) {
          $location.path('/children/' + id);
        });
      };

      vm.cancelForm = function() {
        $location.path('/children/' + id);
      };
    }) //closes edit controller

    .controller('ShowController', function($routeParams, $scope, $location,  childFactory) {
      var vm = this,
          id = $routeParams.childId;

      vm.childId = id;
      vm.photo = "";

      childFactory.getChild(id, function(data) {
        vm.child = vm.calcCurrentAge(data);
      });

      childFactory.getVacs(id, function(data) {
        vm.vacs = data;
      });

      childFactory.getDrs(id, function(data) {
        vm.drs = data;
      });

      childFactory.getMeds(id, function(data) {
        vm.meds = data;
      });

      childFactory.getMilestones(id, function(data) {
        vm.milestones = data;
      });

      childFactory.getAppts(id, function(data) {
        vm.appts = data;
      });

      childFactory.getGrowths(id, function(data) {
        vm.growths = data;
      });

      vm.savePhoto = function() {
        vm.child.photo = vm.photo.base64;
        childFactory.savePhoto(id, vm.child)
        .success(function(res) {
          vm.photo = "";
          $location.path('/children/' + id);
        });
      }

      vm.addVac = function() {
        childFactory.createVac(id, vm.newVac, function(data) {
          vm.vacs = vm.vacs || {};
          vm.vacs[data.name] = vm.newVac;
          $location.path('/children/' + id);
        });
      };

      vm.addDr = function() {
        childFactory.createDr(id, vm.newDr, function(data) {
          vm.drs = vm.drs || {};
          vm.drs[data.name] = vm.newDr;
          $location.path('/children/' + id);
        });
      };

      vm.addMed = function() {
        childFactory.createMed(id, vm.newMed, function(data) {
          vm.meds = vm.meds || {};
          vm.meds[data.date] = vm.newMed;
          $location.path('/children/' + id);
        });
      };

      vm.addMilestone = function() {
        childFactory.createMilestone(id, vm.newMilestone, function(data) {
          vm.milestones = vm.milestones || {};
          vm.milestones[data.date] = vm.newMilestone;
          $location.path('/children/' + id);
        });
      };

      vm.addAppt = function() {
        childFactory.createAppt(id, vm.newAppt, function(data) {
          vm.appts = vm.appts || {};
          vm.appts[data.date] = vm.newAppt;
          $location.path('/children/' + id);
        });
      };

      vm.addGrowth = function() {
        childFactory.createGrowth(id, vm.newGrowth, function(data) {
          vm.growths = vm.growths || {};
          vm.growths[data.date] = vm.newGrowth;
          $location.path('/children/' + id);
        });
      };

      vm.deleteVac = function(vacId) {
        childFactory.deleteVac(id, vacId, function() {
          delete vm.vacs[vacId];
        });
      };

      vm.deleteDr = function(drId) {
        childFactory.deleteDr(id, drId, function() {
          delete vm.drs[drId];
        });
      };

      vm.deleteMed = function(medId) {
        childFactory.deleteMed(id, medId, function() {
          delete vm.meds[medId];
        });
      };

      vm.deleteMilestone = function(milestoneId) {
        childFactory.deleteMilestone(id, milestoneId, function() {
          delete vm.milestones[milestoneId];
        });
      };

      vm.deleteAppt = function(apptId) {
        childFactory.deleteAppt(id, apptId, function() {
          delete vm.appts[apptId];
        });
      };

      vm.deleteGrowth = function(growthId) {
        childFactory.deleteGrowth(id, growthId, function() {
          delete vm.growths[growthId];
        });
      };

      vm.cancelForm = function() { 
        $location.path('/children/' + id);
      };

      vm.calcCurrentAge = function(child) {
        var dob = moment(child.dob);
        var now = moment();
          child.age = {
            years: now.diff(dob, 'years'),
            months: Math.floor(now.diff(dob, 'months')) + 1
          };
        return child;
      };

    }) //closes show controller
}());
