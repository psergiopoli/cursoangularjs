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
  this.items = ShoppingListService.getBoughtItems();
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
    boughtItems.push(shoppingItems[index]);
    shoppingItems.splice(index,1);
	console.log(boughtItems);
  };

  service.getShoppingItems = function(){
    return shoppingItems;
  };
  
  service.getBoughtItems = function(){
    return boughtItems;
  };
}

})();
