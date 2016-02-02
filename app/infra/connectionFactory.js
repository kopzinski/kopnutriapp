var mysql = require('mysql');

var connectMYSQL = function (){
	if(process.env.NODE_ENV == 'test') {
		
		return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'root',
			database : 'kopnutridb', 
		});	
	}
	
	if(process.env.NODE_ENV == 'production') {
		
		return mysql.createConnection({
			host : 'us-cdbr-iron-east-03.cleardb.net',
			user : 'bfc1a7c3276ecc',
			password : '4e832ce1',
			database : 'heroku_3040733d90ce24c', 
		});	
	}

		return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'root',
			database : 'kopnutridb', 
		});
	
	
};

module.exports = function(){
	return connectMYSQL;
}