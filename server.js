var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var index = require( './modules/routes/index' );
var listing = require( './modules/routes/listing' );

app.use( '/', index );
app.use( '/listing', listing );
app.use( bodyParser.json() );
app.use( express.static( 'public' ) );

var port = process.env.PORT || 7878;

app.listen( port, function( ){
  console.log( 'listening on', port );
});
