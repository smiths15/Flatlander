(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [

    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Origin of the Dodecahedron is unknown, hence its low value.',
      canPurchase: true,
      images: [
        {
          full: 'images/gem1.gif',
        },
        {
          full: 'images/gem3.gif',
        }
      ]
    },

    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'Origin of the Pentagonal is unknown, hence its low value.',
      canPurchase: true,
      images: [
        {
          full: 'images/gem2.gif'
        },
        {
          full: 'images/gem4.gif'
        }
      ]
    },

  ];

}) ();
