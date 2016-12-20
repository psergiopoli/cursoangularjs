(function () {
'use strict';

angular.module('RestaurantApp')
.component('categoriesList', {
  templateUrl: 'src/restaurantApp/templates/categories-list.template.html',
  bindings: {
    items: '<'
  }
});

})();
