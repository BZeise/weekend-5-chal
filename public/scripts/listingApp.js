// console.log( 'listingApp loaded!' );

// declare myApp
var myApp = angular.module('myApp', []);

// declare controller
myApp.controller('ListingController', function( ListingService ) {
  var vm = this;

  vm.showListings = function() {
    ListingService.getListings().then( function() {
      // console.log('in listingApp, vm.showListings, there is no response arg');
      console.log('ListingService.objToSend is: ', ListingService.objToSend);
      vm.arrayToShow = ListingService.objToSend.data;
    });
  }; // end showListings

});
