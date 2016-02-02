function AntropometriasDAO(connection) {
	this.connection = connection;
}

AntropometriasDAO.prototype.lista = function(callback){
	this.connection.query('select * from antropometria', callback);
}

AntropometriasDAO.prototype.salva = function(antropometria, callback){
	this.connection.query('insert into antropometria set ?',antropometria, callback);
}

module.exports = function (connection) {
	return AntropometriasDAO;
}