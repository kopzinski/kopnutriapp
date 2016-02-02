function ProdutosDAO(connection) {
	this.connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
	this.connection.query('select * from livros', callback);
}

ProdutosDAO.prototype.salva = function(produto, callback){
	this.connection.query('insert into livros set ?',produto, callback);
}

module.exports = function (connection) {
	return ProdutosDAO;
}