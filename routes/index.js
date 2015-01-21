
/*
 * GET home page.
 */

exports.index = function(req, res){
	//res.setHeader('content-security-policy','frame-src https://*.cdn.vine.co/*');
	res.setHeader("content-security-policy","script-src 'none'");
  	res.render('index', { title: 'Express' });
};