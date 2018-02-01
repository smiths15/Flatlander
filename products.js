(function(){
  var app = angular.module('store-products', []);
  //Element Directive for Product Title//
  app.directive("productTitle", function(){
    return {
      restrict: "E",
      templateUrl: "product-title.html"
    };
  });
  //Element Directive for Product Panel//
  app.directive("productPanel", function(){
    return {
      restrict: "E",
      templateUrl: "product-panel.html",
      controller: function(){
        this.tab = 1;

        this.selectTab = function(setTab){
          this.tab = setTab;
        }; 

        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
    };
  });
  //Product Tabs Directive//
  app.directive('productTabs', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-tabs.html'
    };
  });
  //Product Reviews Directive//
  app.directive('productReviews', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-reviews.html',
      controller: function(){
        this.review = {};

        this.addReview = function(product){
        product.reviews.push(this.review);
        this.review = {};
        };
      },
      controllerAs: 'reviewCtrl'
    };
  });
  //Product Gallery Directive//
  app.directive('productGallery', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-gallery.html',
      controller: function(){
        this.current = 0;
        this.setCurrent = function(value){
          if(!value){
            this.current = 0;
          }else{
            this.current = value;
          };
        };
      },
      controllerAs: 'gallery',
    };
  });
}) ();