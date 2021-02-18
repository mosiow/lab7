var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
	data['viewAlt'] = false;
  	response.render('index', projects);
};

exports.viewAlt = function(request, response){
	data['viewAlt'] = true;
	response.render('index', projects)
}