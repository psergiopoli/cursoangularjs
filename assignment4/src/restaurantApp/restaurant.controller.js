(function () {
'use strict';

angular.module('RestaurantApp')
.controller('RestaurantMenuController', RestaurantMenuController);


RestaurantMenuController.$inject = ['items'];
function RestaurantMenuController(items) {
  var mainList = this;
  mainList.items = items.data;
}

})();
