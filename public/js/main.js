angular.module('kopnutri', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
.config(function($routeProvider, $locationProvider){
	
	$locationProvider.html5Mode(true);

	$routeProvider.when('/antropometrias',{
		templateUrl : 'partials/antropometrias.html',
		controller : 'AntropometriasController'
	});

	// $routeProvider.when('/fotos/new',{
	// 	templateUrl : 'partials/foto.html',
	// 	controller : 'FotoController'
	// });

	// $routeProvider.when('/fotos/edit/:fotoId',{
	// 	templateUrl : 'partials/foto.html',
	// 	controller : 'FotoController'
	// });

	$routeProvider.otherwise({redirectTo : '/antropometrias'});
	
});