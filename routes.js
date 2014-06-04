module.exports = function(app) {

	// Require mongoose dependency
	var mongoose = require('mongoose');

	/* ======================= SERVER ROUTES ====================== */
	// handle things like api calls
	// authentication routes

	// product:productId API route
	app.get('/api/product/:productId', function(req, res) {
		// use mongoose to get a product in the database by guid
		mongoose.model('Product').findOne({guid: req.params.productId}, function(err, product) {
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err);

			res.send(product); // return the product JSON format
		});
	});

	// products API route
	app.get('/api/products', function(req, res) {
		// use mongoose to get all products in the database
		mongoose.model('Product').find(function(err, products) {
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err);

			res.send(products); // return all products in JSON format
		});
	});

	// route to handle creating (app.post)
	// route to handle delete (app.delete)

	/* ========================= FRONT-END ROUTES ======================= */
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load our public/index.html file
	});

};
