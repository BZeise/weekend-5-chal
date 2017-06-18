// console.log( 'listing.service.js loaded!' );

myApp.service( 'ListingService', function( $http ) {
  var sv = this;

  sv.getListings = function () {
    return $http.get ('/listing' ).then( function( response ){
      // console.log('back from $http.get in sv.getListings with response:', response);
      sv.objToSend = response;
    });
  }; // end getListings

});
