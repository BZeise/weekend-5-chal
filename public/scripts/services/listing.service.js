// console.log( 'listing.service.js loaded!' );

myApp.service( 'ListingService', function( $http ) {
  var sv = this;

  sv.getListings = function () {
    return $http.get ('/listing' ).then( function( response ){
      // console.log('back from $http.get in sv.getListings with response:', response);
      sv.objToSend = response;
    });
  }; // end getListings

  // sv.getSearch = function(searchFor) {
  //   // assemble search term from ng-model "searchInput"
  //   var searchUrl = "http://api.listing.com/v1/gifs/search?q=";
  //   // target search input
  //   searchUrl += searchFor;
  //   searchUrl += "&api_key=dc6zaTOxFJmzC";
  //   console.log( 'searching for: ', searchUrl);
  //
  //   return $http.get( searchUrl ).then( function( response ){
  //     console.log( 'response is: ', response);
  //
  //     // since we only display one image...
  //     // ...choose a random one in results to display
  //     var randomIndexToSearch = Math.floor(Math.random() * 25);
  //     sv.searchGif = response.data.data[randomIndexToSearch].images.downsized.url;
  //   });
  // };

});
