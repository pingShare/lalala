var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ciblog'
});
connection.connect();
exports.query()=function(sql){
	
	connection.query(sql, function (error, results, fields) {
	if (error) throw error;
		// console.log('The solution is: ', results[0].solution);
		console.log(results);
	connection.end();
	});

}



