
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.setHeader('content-security-policy','frame-src http://teched-lunchtime.azurewebsites.net http://msgnotify.azurewebsites.net');
  	res.render('index', { title: 'Express' });
};