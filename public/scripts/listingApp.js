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

  vm.propertyName = 'city';
  vm.reverse = false;

  vm.sortBy = function(propertyName) {
    console.log('sortBy clicked, passing: ', propertyName);
    vm.reverse = (vm.propertyName === propertyName) ? !vm.reverse : false;
    vm.propertyName = propertyName;
  };
});
