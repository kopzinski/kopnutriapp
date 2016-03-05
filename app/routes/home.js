var path = require('path');
module.exports = function(app) {
	console.log('Kop! Service HOME');
	// app.get('/ws/antropometrias/:atletaId', function(req, res, next) {
	// 	console.log('Kop! Service HOME listagem');
	// 	//TODO: Diversas mudanças para associar com atletas...
	// 	//var atletaId = parseInt(req.params.atletaId);

	// 	var connection = app.infra.connectionFactory();
	// 	var antropometriasDAO = new app.infra.AntropometriasDAO(connection);

	// 	antropometriasDAO.lista(function(err, results) {
	// 		if(err) {
	// 			console.log(err);
	// 			return next(err);
	// 		}
	// 		res.format({
	// 			json:function() {
	// 				res.json(results);
	// 			}
	// 		});
	// 	});
	// 	connection.end();
	// });	
	// app.get('/',function(req,res){
	// 	var connection = app.infra.connectionFactory();
	// 	var dao = new app.infra.AntropometriasDAO(connection);

	// 	dao.lista(function(err, results){
	// 		//console.log(results);
	// 		res.render('home/index',{results:results});
	// 	});
	// 	connection.end();
	// });

	app.all('/*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
}