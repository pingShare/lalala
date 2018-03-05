var db = require('./db.js');

exports.login=function(req,res,next){
	res.render('login');
}
exports.checklogin=function(sql,callback){
	/*var username = req.body.email;
	var pass=req.body.pwd;*/
	db.query(error,results);
} 