module.exports = function(app) {

	app.get('/antropometrias', function(req, res, next) {
		console.log(new Date(),'Kop! GET:antropometrias');
		var connection = app.infra.connectionFactory();
		var antropometriasDAO = new app.infra.AntropometriasDAO(connection);

		antropometriasDAO.lista(function(err, results){
			if(err) {
				console.log(err);
				return next(err);
			}
			res.format({
				json:function(){
					console.log('results',results);
					res.json(results);
				}
			});
		});
		connection.end();
	});

	app.get('/produtos/form', function(req, res){
		res.render('produtos/form',{errosValidacao:{},produto:{}});
	});

	
	app.post('/produtos', function(req,res) {

		var produto = req.body;

		req.assert('titulo','Titulo eh obrigatorio').notEmpty();
		req.assert('preco','formato invalido').isFloat();

		

		var erros  = req.validationErrors();
		if(erros) {
			res.format({
				html:function(){
					res.status(400).render('produtos/form',{errosValidacao:erros,produto:produto});
				},
				json:function(){
					res.status(400).json(erros);
				}
			});			
			
			return;

		}

		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.salva(produto, function(erros,resultados){
			res.redirect('/produtos');
		});

	});
}
