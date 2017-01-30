var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'sermons';

	// Load the sermons
	view.query('sermons', keystone.list('Sermon').model.find().sort('-date' ));

	// Render the view
	view.render('sermons');

};
