angular.module('minhasDiretivas', ['meusServicos'])
	.directive('meuPainel', function(){
		console.log('minhas-diretivas.js1');
		var ddo = {};
		ddo.restrict = "AE";
		ddo.transclude = true;
		ddo.scope = {
			titulo : '@'
		};

		ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;
	})
	.directive('minhaFoto', function() {
		console.log('minhas-diretivas.js1');
	    var ddo = {};

	    ddo.restrict = "AE";

	    ddo.scope = {
	        titulo: '@',
	        url: '@'
	    };

	    ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           

	    return ddo;

	})
	.directive('meuBotaoPerigo', function() {
		console.log('minhas-diretivas.js1');
	    var ddo = {};
	    ddo.restrict = "E";
	    ddo.scope = {
	        nome: '@',
	        acao : '&'
	    }
	    ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

	    return ddo;
	})
	.directive('meuFocus', function() {
		console.log('minhas-diretivas.js1');
        var ddo = {};
        ddo.restrict = "A";

        ddo.link = function(scope, element){
        	scope.$on('fotoCadastrada', function(){
        		element[0].focus();
        	});
        };

        return ddo;
    })
    .directive('meusTitulos', function() {
    	console.log('minhas-diretivas.js1');
        var ddo = {};
        ddo.restrict = 'E';
        ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
        ddo.controller = function($scope, recursoFoto){
        	recursoFoto.query(function(fotos){
        		$scope.titulos = fotos.map(function(foto) {
                    return foto.titulo;
                });
        	});
        };
        return ddo;
    });