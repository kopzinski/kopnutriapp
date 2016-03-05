module.exports = function(app) {
	
	console.log('Kop! Antropometria Service')

	app.get('/ws/antropometrias', function(req, res, next) {

		console.log('Kop! Service ANTRO listagem');
		//TODO: Diversas mudanças para associar com atletas...
		//var atletaId = parseInt(req.params.atletaId);

		var connection = app.infra.connectionFactory();
		var antropometriasDAO = new app.infra.AntropometriasDAO(connection);

		antropometriasDAO.lista(function(err, results) {
			if(err) {
				console.log(err);
				return next(err);
			}
			res.format({
				json:function() {
					res.json(results);
				}
			});
		});
		connection.end();
	});

	// app.get('/produtos/form', function(req, res){
	// 	res.render('produtos/form',{errosValidacao:{},produto:{}});
	// });
	
	app.post('/ws/antropometrias', function(req,res) {

		console.log('Kop! Service ANTRO salvar...');

		// var produto = req.body;
		var antropometria = req.body;
		console.log(antropometria);

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
