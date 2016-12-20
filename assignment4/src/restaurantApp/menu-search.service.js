(function () {
'use strict';

angular.module('RestaurantApp')
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMenu = function (category) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {category:category}
    });
  
    return response;
  };

  service.getCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json"),
    });
  
    return response;
  };
}

})();
