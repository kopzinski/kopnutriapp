module.exports = function(app) {

	app.get('/antropometrias/:atletaId', function(req, res, next) {
		
		//TODO: Diversas mudanças para associar com atletas...
		//var atletaId = parseInt(req.params.atletaId);

		var connection = app.infra.connectionFactory();
		var antropometriasDAO = new app.infra.AntropometriasDAO(connection);

		antropometriasDAO.lista(function(err, results){
			if(err) {
				console.log(err);
				return next(err);
			}
			res.format({
				json:function(){
					res.json(results);
				}
			});
		});
		connection.end();
	});

	app.get('/produtos/form', function(req, res){
		res.render('produtos/form',{errosValidacao:{},produto:{}});
	});

	
	app.post('/antropometrias', function(req,res) {

		// var produto = req.body;
		var antropometria = req.body;

		req.assert('peso','Peso é obrigatório').notEmpty();
		// req.assert('peso','Tipo do peso ').isFloat();

		var erros  = req.validationErrors();
		if(erros) {
			res.format({
				json:function(){
					res.status(400).json(erros);
				}
			});			
			return;
		}

		var connection = app.infra.connectionFactory();
		var antropometriasDAO = new app.infra.AntropometriasDAO(connection);

		antropometriasDAO.salva(antropometria, function(erros,resultados){
			console.log(erros);
			res.format({
				json:function(){
					res.json(antropometria);
				}
			});
		});

	});
}
