(function () {
'use strict';

angular.module('RestaurantApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/restaurantApp/templates/home.template.html'
  })

  .state('restaurantList', {
    url: '/restaurant-list',
    templateUrl: 'src/restaurantApp/templates/restaurant-list.template.html',
    controller: 'RestaurantMenuController as restaurant',
    resolve: {
      items: ['MenuSearchService', function (MenuSearchService) {
        return MenuSearchService.getCategories();
      }]
    }
  })

  .state('restaurantList.category', {
    url: '/restaurant-list/{categoryId}',
    templateUrl: 'src/restaurantApp/templates/category-detail.template.html',
    controller: 'CategoryDetailController as category',
    resolve: {
      categoryItems: ['$stateParams', 'MenuSearchService',
            function ($stateParams, MenuSearchService) {
              return MenuSearchService.getMenu($stateParams.categoryId);
            }]
    }
  });

}

})();
