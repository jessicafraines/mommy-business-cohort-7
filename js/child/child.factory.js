;(function(){
  'use strict';

  angular.module('mommyApp')
  .factory('childFactory', function($rootScope, $http, $location, FIREBASE_URL){
    function _childUrl(id){
      if (id) {
        return FIREBASE_URL + '/users/' + $rootScope.user.uid + '/children/' + id + '.json?auth=' + $rootScope.user.token;
      } else {
        return FIREBASE_URL + '/users/' + $rootScope.user.uid + '/children.json?auth=' + $rootScope.user.token;
      }
    }
    function _apptsUrl(childId, apptId) {
      if (apptId) {
        return FIREBASE_URL + '/users/' + $rootScope.user.uid + '/children/' + childId + '/appts/' + apptId + '.json?auth=' + $rootScope.user.token;
      } else {
        return FIREBASE_URL + '/users/' + $rootScope.user.uid + '/children/' + childId + '/appts/.json?auth=' + $rootScope.user.token;
      }
    }
    function _milestonesUrl(childId, milestoneId) {
      if (milestoneId) {
        return FIREBASE_URL + '/users/' + $rootScope.user.uid + '/children/' + childId + '/milestones/' + milestoneId + '.json?auth=' + $rootScope.user.token;
      } else {
        return FIREBASE_URL + '/users/' + $rootScope.user.uid + '/children/' + childId + '/milestones/.json?auth=' + $rootScope.user.token;
      }
    }
    function _growthsUrl(childId, growthId) {
      if (growthId) {
        return FIREBASE_URL + '/users/' + $rootScope.user.uid + '/children/' + childId + '/growths/' + growthId + '.json?auth=' + $rootScope.user.token;
      } else {
        return FIREBASE_URL + '/users/' + $rootScope.user.uid + '/children/' + childId + '/growths/.json?auth=' + $rootScope.user.token;
      }
    }
    function createMilestone(childId, milestone, cb){
      $http.post(_milestonesUrl(childId), milestone)
      .success(function(data){
        cb(data);
      })
      .error(function(err){
        alert('Milestone not added');
      });
    }
    function getMilestones(childId, cb){
      $http.get(_milestonesUrl(childId))
      .success(function(data){
        cb(data);
      })
      .error(function(err){
        alert('Cant retrieve the milestones');
      });
    }
    function editMilestone(childId, milestoneId, milestone){
      $http.put(_milestonesUrl(childId, milestoneId), milestone)
      .success(function(data){
      })
      .error(function(err){
        alert('Edit milestones broke');
      });
    }
    function getMilestone(childId, milestoneId, cb){
      $http.get(_milestonesUrl(childId, milestoneId))
      .success(function(data){
        cb(data);
      })
      .error(function(err){
        alert('Get milestone broke');
      });
    }
    function deleteMilestone(childId, milestoneId, cb){
      console.log('Milestone');
      $http.delete(_milestonesUrl(childId, milestoneId))
      .success(function(){
        cb();
      })
      .error(function(err){
        alert('Delete growth broke');
      });
    }
    function createGrowth(childId, growth, cb){
      $http.post(_growthsUrl(childId), growth)
      .success(function(data){
        cb(data);
      })
      .error(function(err){
        alert('Growth not added');
      });
    }
    function getGrowths(childId, cb){
      $http.get(_growthsUrl(childId))
      .success(function(data){
        cb(data);
      })
      .error(function(err){
        alert('Cant retrieve the growths');
      });
    }
    function editGrowth(childId, growthId, growth){
      $http.put(_growthsUrl(childId, growthId), growth)
      .success(function(data){
      })
      .error(function(err){
        alert('Edit growths broke');
      });
    }
    function getGrowth(childId, growthId, cb){
      $http.get(_growthsUrl(childId, growthId))
      .success(function(data){
        cb(data);
      })
      .error(function(err){
        alert('Get growth broke');
      });
    }
    function deleteGrowth(childId, growthId, cb){
      $http.delete(_growthsUrl(childId, growthId))
      .success(function(){
        cb();
      })
      .error(function(err){
        alert('Delete growth broke');
      });
    }
    function createAppt(childId, appt, cb){
      $http.post(_apptsUrl(childId), appt)
      .success(function(data){
        cb(data);
      })
      .error(function(err){
        alert('Appt not added');
      });
    }
    function getAppts(childId, cb){
      $http.get(_apptsUrl(childId))
      .success(function(data){
        cb(data);
      })
      .error(function(err){
        alert('Cant retrieve the appts');
      });
    }
    function editAppt(childId, apptId, appt){
      $http.put(_apptsUrl(childId, apptId), appt)
      .success(function(data){
      })
      .error(function(err){
        alert('Edit broke');
      });
    }
    function getAppt(childId, apptId, cb){
      $http.get(_apptsUrl(childId, apptId))
      .success(function(data){
        cb(data);
      })
      .error(function(err){
        alert('Get item broke');
      });
    }
    function deleteAppt(childId, apptId, cb){
      $http.delete(_apptsUrl(childId, apptId))
      .success(function(){
        cb();
      })
      .error(function(err){
        alert('Delete broke');
      });
    }

    function createChild(child, cb){
      $http.post(_childUrl(), child)
      .success(function(data){
        cb(data);
        $location.path('/children');
      })
      .error(function(err){
        alert('Child not added');
      });
    }
    
    function getChild(id, cb){
      $http.get(_childUrl(id))
      .success(function(data){
        cb(data);
      })
      .error(function(err){
        alert('Cant find that child');
      });
    }

    function getChildren(cb){
      $http.get(_childUrl())
      .success(function(data){
        cb(data);
      })
      .error(function(err){
        alert('Where are those darn kids');
      });
    }
    return {
      createChild: createChild,
      getChild: getChild,
      getChildren: getChildren,
      createAppt: createAppt,
      getAppts: getAppts,
      editAppt: editAppt,
      getAppt: getAppt,
      deleteAppt: deleteAppt,
      createMilestone: createMilestone,
      getMilestones: getMilestones,
      editMilestone: editMilestone,
      getMilestone: getMilestone,
      deleteMilestone: deleteMilestone,
      createGrowth: createGrowth,
      getGrowths: getGrowths,
      editGrowth: editGrowth,
      getGrowth: getGrowth,
      deleteGrowth: deleteGrowth
    }
  }) //closes factory
}());
