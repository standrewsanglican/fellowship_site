var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'sermons';

	// Load the galleries by sortOrder
	view.query('sermons', keystone.list('Sermon').model.find());

	// Render the view
	view.render('sermons');

};
