module.exports = function(app) {
	app.get('/',function(req,res){
		var connection = app.infra.connectionFactory();
		var dao = new app.infra.AntropometriasDAO(connection);

		dao.lista(function(err, results){
			//console.log(results);
			res.render('home/index',{results:results});
		});
		connection.end();
	});
}