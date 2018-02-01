(function(){
  var app = angular.module('store', ['store-products']);
//$http service name and argument//
  app.controller('StoreController', ['$http',function($http){
    var store = this;
    store.products = [];
    $http({
      method: 'get', 
      url:'/products.json'}).then(function(success){
      console.log(success, 'data retrieved successfully');
      data = succes.data;
      store.products = data;
    },
    function(error){
      console.log(error, 'cannot get data');
    }).catch(angular.noop);
  }]);

})();
