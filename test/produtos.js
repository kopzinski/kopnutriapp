var express = require('../config/express')();
var request = require('supertest')(express);
var assert = require('assert');
describe('#AntropometriaController',function(){

	// beforeEach(function(done){
	// 	var conn = express.infra.connectionFactory();
	// 	conn.query("delete from livros",function(ex, results){
	// 		if(!ex) {
	// 			done();
	// 		}
	// 	});
	// });

	it('#listagem json',function(done) {
		request.get('/antropometrias/1')
		.set('Accept','application/json')
		.expect('Content-Type',/json/)
		.expect(200,done);
	});

	// it('#cadastro novo produto com dados invalidos',function(done){
	// 	request.post('/produtos')
	// 	.send({titulo:"",descricao:"novo livro"})
	// 	.expect(400,done);
	// });

	// it('#cadastro novo produto com dados validos',function(done){
	// 	request.post('/produtos')
	// 	.send({titulo:"lirvo",descricao:"novo livro",preco:20.50})
	// 	.expect(302,done);
	// });

});
	