angular.module('myApp', ['ngAnimate']);

angular.module('myApp')
.controller('myController', function ($scope) {
  
  $scope.inventory = [
    { id:1, category:"2mm", price:48000},
    { id:2, category:"6mm", price:50000},
    { id:3, category:"8mm", price:59500},
    { id:4, category:"10mm", price:59500},
    { id:5, category:"12mm", price:59500},
    { id:6, category:"22mm", price:59500},
  ];
  
  $scope.cart = [];
  
  var findItemById = function(items, id) {
    return _.find(items, function(item) {
      return item.id === id;
    });
  };
  
  $scope.getCost = function(item) {
    return item.qty * item.price;
  };

  $scope.addItem = function(itemToAdd) {
    var found = findItemById($scope.cart, itemToAdd.id);
    if (found) {
      found.qty += itemToAdd.qty;
    }
    else {
      $scope.cart.push(angular.copy(itemToAdd));}
  };
  
  $scope.getTotal = function() {
    var total =  _.reduce($scope.cart, function(sum, item) {
      return sum + $scope.getCost(item);
    }, 0);
    console.log('total: ' + total);
    return total;
  };
  
  $scope.clearCart = function() {
    $scope.cart.length = 0;
  };
  
  $scope.removeItem = function(item) {
    var index = $scope.cart.indexOf(item);
    $scope.cart.splice(index, 1);
  };
  
});
