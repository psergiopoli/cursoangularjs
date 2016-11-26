(function () {
'use strict';

angular.module('lunchApp', [])
.controller('lunchController', lunchController);

lunchController.$inject = ['$scope'];

function lunchController($scope){

  $scope.lunchMenu = "";
  $scope.messageType = "success";


  $scope.CheckIfTooMuch = function(){
    var completeMenu = $scope.lunchMenu.split(',');
    if($scope.lunchMenu.length==0){
      $scope.lunchMessage = "Please enter data first";
      $scope.messageType = "danger";
      $scope.inputBorder = "has-error"
    }else if(completeMenu.length>=1 && completeMenu.length <=3){
      $scope.lunchMessage = "Enjoy!"
      $scope.messageType = "success";
      $scope.inputBorder = "has-success"
    }else if (completeMenu.length>=4) {
      $scope.lunchMessage = "Too much!"
      $scope.messageType = "success";
        $scope.inputBorder = "has-success"
    }
  };

};

})();
