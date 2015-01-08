;(function(){
  'use strict';

  angular.module('mommyApp')
  .factory('childFactory', function($rootScope, $http, $location, FIREBASE_URL) { 
    function _childUrl(id) {
      if (id) {
        return FIREBASE_URL + '/users/' + $rootScope.user.uid + '/children/' + id + '.json?auth=' + $rootScope.user.token;
      } else {
        return FIREBASE_URL + '/users/' + $rootScope.user.uid + '/children.json?auth=' + $rootScope.user.token;
      }
    }

    function _medsUrl(childId, medId) {
      if (apptId) {
        return FIREBASE_URL + '/users/' + $rootScope.user.uid + '/children/' + childId + '/meds/' + medId + '.json?auth=' + $rootScope.user.token;
      } else {
        return FIREBASE_URL + '/users/' + $rootScope.user.uid + '/children/' + childId + '/meds/.json?auth=' + $rootScope.user.token;
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

    function createChild(child, cb) {
      return $http.post(_childUrl(), child);
    }

    function createMed(childId, med, cb) {
      $http.post(_medsUrl(childId), med)
      .success(function(data) {
        cb(data);
      })
      .error(function(err) {
        alert(err);
      });
    }

    function createMilestone(childId, milestone, cb) {
      $http.post(_milestonesUrl(childId), milestone)
      .success(function(data) {
        cb(data);
      })
      .error(function(err) {
        alert(err);
      });
    }

    function createAppt(childId, appt, cb) { 
      $http.post(_apptsUrl(childId), appt)
      .success(function(data) {
        cb(data);
      })
      .error(function(err) {
        alert('Appt not added');
      });
    }

    function createGrowth(childId, growth, cb) {
      $http.post(_growthsUrl(childId), growth)
      .success(function(data) {
        cb(data);
      })
      .error(function(err) {
        alert('Growth not added');
      });
    }


    function getChild(id, cb) {
      $http.get(_childUrl(id))
      .success(function(data) {
        cb(data);
      })
      .error(function(err) {
        alert(err);
      });
    }

    function getMed(childId, medId, cb) {
      $http.get(_medsUrl(childId, medId))
      .success(function(data) {
        cb(data);
      })
      .error(function(err) {
        alert(err);
      });
    }

    function getMilestone(childId, milestoneId, cb) {
      $http.get(_milestonesUrl(childId, milestoneId))
      .success(function(data) {
        cb(data);
      })
      .error(function(err) {
        alert('Get milestone broke');
      });
    }

    function getAppt(childId, apptId, cb) {
      $http.get(_apptsUrl(childId, apptId))
      .success(function(data) {
        cb(data);
      })
      .error(function(err) {
        alert('Get item broke');
      });
    }

    function getGrowth(childId, growthId, cb) {
      $http.get(_growthsUrl(childId, growthId))
      .success(function(data) {
        cb(data);
      })
      .error(function(err) {
        alert('Get growth broke');
      });
    }

    function getChildren(cb) { 
      $http.get(_childUrl())
      .success(function(data) {
        cb(data);
      })
      .error(function(err) {
        alert(err);
      });
    }

    function getMeds(cb) { 
      $http.get(_medsUrl())
      .success(function(data) {
        cb(data);
      })
      .error(function(err) {
        alert(err);
      });
    }

    function getMilestones(childId, cb) {
      $http.get(_milestonesUrl(childId))
      .success(function(data) {
        cb(data);
      })
      .error(function(err) {
        alert('Cant retrieve the milestones');
      });
    }

    function getAppts(childId, cb) {
      $http.get(_apptsUrl(childId))
      .success(function(data) {
        cb(data);
      })
      .error(function(err) {
        alert('Cant retrieve the appts');
      });
    }
    function getGrowths(childId, cb) {
      $http.get(_growthsUrl(childId))
      .success(function(data) {
        cb(data);
      })
      .error(function(err) {
        alert(err);
      });
    }

    function editMed(childId, medId, med) {
      return $http.put(_medsUrl(childId, medId), med);
    }

    function editMilestone(childId, milestoneId, milestone) {
      return $http.put(_milestonesUrl(childId, milestoneId), milestone);
    }

    function editAppt(childId, apptId, appt) {
      return $http.put(_apptsUrl(childId, apptId), appt);
    }

    function editGrowth(childId, growthId, growth) {
      return $http.put(_growthsUrl(childId, growthId), growth);
    }

    function deleteKid(id, cb) {
      $http.delete(_childUrl(id))
      .success(function(){
        cb();
      })
      .error(function(err) {
        alert(err);
      });
    }

    function deleteMed(childId, medId, cb) {
      $http.delete(_medsUrl(childId, medId))
      .success(function() {
        cb();
      })
      .error(function(err) {
        alert(err);
      });
    }

    function deleteMilestone(childId, milestoneId, cb) {
      $http.delete(_milestonesUrl(childId, milestoneId))
      .success(function() {
        cb();
      })
      .error(function(err) {
        alert(err);
      });
    }

    function deleteAppt(childId, apptId, cb) {
      $http.delete(_apptsUrl(childId, apptId))
      .success(function() {
        cb();
      })
      .error(function(err) {
        alert('Delete broke');
      });
    }

    function deleteGrowth(childId, growthId, cb) {
      $http.delete(_growthsUrl(childId, growthId))
      .success(function() {
        cb();
      })
      .error(function(err) {
        alert('Delete growth broke');
      });
    }

    function savePhoto(childId, child){
      return $http.put(_childUrl(childId), child);
    }

    return {
      createChild: createChild,
      createMed: createMed,
      createMilestone: createMilestone,
      createAppt: createAppt,
      createGrowth: createGrowth,
      getChild: getChild,
      getMed: getMed,
      getMilestone: getMilestone,
      getAppt: getAppt,
      getGrowth: getGrowth,
      getChildren: getChildren,
      getMeds: getMeds,
      getMilestones: getMilestones,
      getAppts: getAppts,
      getGrowths: getGrowths,
      editMed: editMed,
      editMilestone: editMilestone,
      editAppt: editAppt,
      editGrowth: editGrowth,
      deleteKid: deleteKid,
      deleteMed: deleteMed,
      deleteMilestone: deleteMilestone,
      deleteAppt: deleteAppt,
      deleteGrowth: deleteGrowth,
      savePhoto: savePhoto
    }
  }) //closes child factory
}());
