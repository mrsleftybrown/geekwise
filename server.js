/* ================= REQUIRE MODULES ===================== */

var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var uriUtil      = require('mongodb-uri');
var path         = require('path');
var fs           = require('fs');
var favicon      = require('static-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

/* ===================== CONFIGURATION ==================== */

var port = process.env.PORT || 9001;					                    // Default port or port 9001

/*
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for
 * plenty of time in most operating environments.
 */

var options = {
	server: {
		socketOptions: {
			keepAlive: 1,
			connectTimeoutMS: 30000
		}
	},
	replset: {
		socketOptions: {
			keepAlive: 1,
			connectTimeoutMS : 30000
		}
	}
};

/*
 * Mongoose uses a different connection string format than MongoDB's standard.
 * Use the mongodb-uri library to help you convert from the standard format to
 * Mongoose's format.
 */

var mongodbUri = 'mongodb://<dbuser>:<dbpassword>@<host>:<port>/<dbname>';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);
var conn = mongoose.connection;

mongoose.connect(mongooseUri, options);
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function() {
	// Wait for the database connection to establish, then start the app.
});

/* ======================== MODELS ======================== */
fs.readdirSync(__dirname + '/models').forEach(function(filename) {
	if(~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});

/* ================= REGISTER MODULES ===================== */
app.use(favicon());
app.use(logger('dev'));                                 		        // log every request to the console
app.use(bodyParser.json());                             		        // have the ability to simulate DELETE and PUT
app.use(bodyParser.urlencoded());                       		        // have the ability to simulate DELETE and PUT
app.use(cookieParser());                                		        // have the ability to parse cookies
app.use(express.static(path.join(__dirname, 'public')));		        // set the static files location

/* ======================== ROUTES ========================= */
require('./routes.js')(app);                            		        // configure our routes, passing in app reference

/* =============== START APP (THIS GOES LAST) ============== */
app.listen(port);                                                       // startup our app at http://localhost:9001
console.log('The MEAN app is served up at http://localhost/:' + port);  // shoutout to the user
exports = module.exports = app;                                         // expose app
