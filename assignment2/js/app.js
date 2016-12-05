(function () {
'use strict';

angular.module('ShoppingApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService)
.filter('bought',boughFilter)
.filter('boughtEmpty',boughEmptyFilter);

function boughFilter(){
  return function(input){
    var boughtTest = function(element, index, array){
      return element.bought;
    };

    if(input.every(boughtTest)){
      return true;
    };
  };
}

function boughEmptyFilter(){
  return function(input){
    var boughtTest = function(element, index, array){
      return !element.bought;
    };

    if(input.every(boughtTest)){
      return true;
    };
  };
}

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService){
  var controller = this;

  this.items = ShoppingListService.getShoppingItems();
  this.message = 'Everything is bought!';

  this.buyItem = function(index){
    ShoppingListService.buyItem(index);
  };
};

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService){
  var controller = this;
  this.items = ShoppingListService.getShoppingItems();
  this.message = 'Nothing bought yet.';
};

function ShoppingListService(){
  var service = this;

  var shoppingItems = shoppingItems = [
    {name:'10 Peras',bought:false},
    {name:'30 Uvas',bought:false},
    {name:'5 Bolos',bought:false},
    {name:'2 Nescau',bought:false},
    {name:'5 Leite',bought:false},
    {name:'50 cookies',bought:false}
  ];

  service.buyItem = function(index){
    shoppingItems[index].bought = true;

  };

  service.getShoppingItems = function(){
    return shoppingItems;
  };
}

})();
