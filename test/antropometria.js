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
		request.get('/ws/antropometrias/1')
		.set('Accept','application/json')
		.expect('Content-Type',/json/)
		.expect(200,done);
	});

	// it('#cadastro novo produto com dados invalidos',function(done){
	// 	request.post('/produtos')
	// 	.send({titulo:"",descricao:"novo livro"})
	// 	.expect(400,done);
	// });

	it('#registra nova antropometria com dados validos',function(done){
		request.post('/ws/antropometrias')
		.send({idade:30,peso:91.0})
		.expect(200,done);
	});

});
	