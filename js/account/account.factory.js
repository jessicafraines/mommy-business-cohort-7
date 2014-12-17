;(function(){
  'use strict';
  angular.module('mommyApp')
  .factory('accountFactory', function($rootScope, $location, FIREBASE_URL){
    var acctFactory = {},
        ref = new Firebase(FIREBASE_URL);
    $rootScope.user = ref.getAuth();

    acctFactory.requireLogin = function(){
      if (!_isLoggedIn()) {
        $location.path('/login');
      } else if (_hasTempPassword()) {
        $location.path('/changePassword');
      }
    };

    acctFactory.disallowLogin = function(){
      if (_isLoggedIn()) {
        $location.path('/children');
      } 
    };

    acctFactory.login = function(email, pswd, cb){
      ref.authWithPassword({
        email : email,
        password : pswd
      }, function(error, authData){
        if (error === null) {
          $rootScope.user = authData;
          ref.child('users').child(authData.uid).child('authData').set(authData);
          cb();
        } else {
          alert('Login unsuccessful');
        }
      }
      );
    };
    
    function _isLoggedIn(){
      return !!ref.getAuth();
    }

    acctFactory.logout = function(cb){
      ref.unauth(function(){
        $rootScope.user = null;
        cb();
      });
    };

    acctFactory.register = function(email, pswd, cb){
      ref.createUser({
        email : email,
        password : pswd
      }, function (error) {
        if (error === null) {
          cb();
        } else {
          alert("Oops, something didn't work. Please try again");
        }
      }
      );
    };

    acctFactory.resetPassword = function(email){
      ref.resetPassword({
        email : email
      }, function(error) {
        if(error === null) {
          alert('Password reset email sent. Check your mail.');
        } else {
          alert('Email address not recognized, please try again.');
        }
      }
      );
    };
    
    function _hasTempPassowrd(){
      return ref.getAuth().password.isTemporaryPassword;
    }

    acctFactory.changePassword = function(oldPswd, newPswd, cb){
      ref.changePassword({
        email : ref.getAuth().password.email,
        oldPassword : oldPswd,
        newPassword : newPswd
      }, function(error) {
        if(error === null) {
          alert('Password was changed successfully');
          cb();
        } else {
          alert('Error changing password');
        };
      }
      );
    };
    return acctFactory;
  }) //close factory
}());
