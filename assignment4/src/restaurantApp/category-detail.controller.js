(function () {
'use strict';

angular.module('RestaurantApp')
.controller('CategoryDetailController', CategoryDetailController);

CategoryDetailController.$inject = ['categoryItems',];
function CategoryDetailController(categoryItems) {
  var itemDetail = this;
  itemDetail.items = categoryItems.data.menu_items;
}

})();
