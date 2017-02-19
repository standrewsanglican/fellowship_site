var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	//locals.google_key = keystone.locals.env.GOOGLE_MAP_API_KEY

	// Render the view
	view.render('index');
};
