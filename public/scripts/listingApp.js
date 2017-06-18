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
  };

// modify old functions for new setup
  // vm.showRandom = function() {
  //   console.log( 'in showRandom' );
  //   ListingService.getRandom().then(function(response){
  //     console.log('in ListingService.getRandom, response it:', response);
  //     vm.gifToShow = ListingService.randomGif;
  //   });
  // }; // end showRandom
  //
  // vm.showSearch = function() {
  //   console.log( 'in showSearch' );
  //   ListingService.getSearch(vm.searchInput).then(function(response){
  //     // console.log('in ListingService.getSearch, response it:', response);
  //     vm.gifToShow = ListingService.searchGif;
  //
  //   });
  // };

});
