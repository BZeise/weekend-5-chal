var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


router.use(bodyParser.urlencoded( {extended: true} ) );
router.use(bodyParser.json());

// router.get('/', function( req, res) {
//   console.log('in listing.js, req.body is: ', req.body);
//   res.send( "s'all good, man");
// });

// 27017 is default mongo port
mongoose.connect('localhost:27017/realestate');
var listingSchema = new mongoose.Schema({
  "cost" : Number,
	"rent" : Number,
	"sqft" : Number,
	"city" : String
});
var listingModel = mongoose.model('listings', listingSchema);

router.get('/', function(req, res) {
  // get and send back all the things
  listingModel.find().then(function(data) {
    console.log('in listing.js, sending back data... oh holy carp this file is huge');
    res.send(data);
  });
});

module.exports = router;
