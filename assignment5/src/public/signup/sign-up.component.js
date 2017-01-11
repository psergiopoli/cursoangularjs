(function () {
"use strict";

angular.module('public')
.component('signup', {
  templateUrl: 'src/public/signup/signup-details.html',
  controller: SignUpComponentController
});

SignUpComponentController.$inject = ['$rootScope','SignUpService','$state'];
function SignUpComponentController($rootScope, SignUpService,$state) {
  var $ctrl = this;
  var listener;

  $ctrl.user = {};

  $ctrl.submit = function () {
    SignUpService.checkMenuId($ctrl.user.favmenuid);
      var menuIdInvalid = $ctrl.user.on;
    if (menuIdInvalid) {
      $ctrl.user.menuid_invalid = true;
      $ctrl.user.completed = false;
    } else {
      $ctrl.user.menuid_invalid = false;;
      SignUpService.persist($ctrl.user);
      $ctrl.user.completed = true;
      $state.go('public.myinfo');
    }
    
  }
}


})();
