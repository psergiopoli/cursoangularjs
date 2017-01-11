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
    var promisse = SignUpService.checkMenuId($ctrl.user.favmenuid);

    
    promisse.success(function(response) {
      $ctrl.user.menuid_invalid = false;
      $ctrl.user.completed = true;      
      SignUpService.persist($ctrl.user);
      //$state.go('public.menuitems',{category: $ctrl.user.favmenuid});
    }).error(function(data, status) {
      $ctrl.user.menuid_invalid = true;
      $ctrl.user.completed = false;
    });
        
  }
}


})();
