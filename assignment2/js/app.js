(function () {
'use strict';

angular.module('ShoppingApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

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
  var boughtItems = [];

  var shoppingItems = shoppingItems = [
    {name:'10 Peras'},
    {name:'30 Uvas'},
    {name:'5 Bolos'},
    {name:'2 Nescau'},
    {name:'5 Leite'},
    {name:'50 cookies'}
  ];

  service.buyItem = function(index){
    shoppingItems.splice(index,1);
    boughtItems.push(shoppingItems);
  };

  service.getShoppingItems = function(){
    return shoppingItems;
  };
}

})();
