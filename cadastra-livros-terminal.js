var http  = require('http');

var configuracoes = {
	hostname: 'localhost',
	port: 3000,
	path: '/antropometrias',
	method: 'post',
	headers: {
		'Accept':'application/json'
	}
};

var client = http.request(configuracoes,function(res){
	console.log(res.statusCode);
	res.on('data', function(body){
		console.log('corpo: '+body);
	});
});

var produto = {
	titulo :'',
	descricao : 'node js',
	preco : 100
};

client.end(JSON.stringify(produto));