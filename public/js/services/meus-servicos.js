angular.module('meusServicos', ['ngResource'])
    .factory('recursoAntropometria', function($resource) {

        return $resource('/ws/antropometrias', null, {
            'update' : { 
                method: 'PUT'
            }
        });
    })
    .factory("registroDeAntropometria", function(recursoAntropometria, $q, $rootScope) {
        var service = {};
        var evento = 'antropometriaRegistrada';

        service.cadastrar = function(antropometria) {
        	 return $q(function(resolve, reject) {
                if(antropometria._id) {
                    recursoAntropometria.update({fotoId: antropometria._id}, antropometria, function() {
                    	$rootScope.$broadcast(evento);
                        resolve({
                            mensagem: 'Antropometria ' + antropometria.peso + ' atualizada com sucesso',
                            inclusao: false
                        });
                    }, function(erro) {
                        console.log(erro);
                        reject({
                            mensagem: 'Não foi possível atualizar a antropometria ' + antropometria.peso
                        });
                    });

                } else {
                     recursoAntropometria.save(antropometria, function() {
                     	$rootScope.$broadcast(evento);
                        resolve({
                            mensagem: 'Antropometria ' + antropometria.peso + ' incluída com sucesso',
                            inclusao: true
                        });
                    }, function(erro) {
                        console.log(erro);
                        reject({
                            mensagem: 'Não foi possível incluir a antropometria ' + antropometria.peso
                        });
                    });
                }
            });
        };
        return service;
    });