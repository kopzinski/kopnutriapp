
angular.module('kopnutri').controller('AntropometriasController',['$scope', 'recursoAntropometria', '$routeParams', 'registroDeAntropometria', function($scope, recursoAntropometria, $routeParams, registroDeAntropometria) {
    
    $scope.antropometrias = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    $scope.antropometria = {};
    var idAtleta = 1;

    recursoAntropometria.query(function(antropometrias){
        console.log(antropometrias);

        $scope.antropometrias = antropometrias;
    }, function(erro){
        console.log(erro);
    });

    $scope.registrarPeso = function() {
        if ($scope.formulario.$valid) {
            registroDeAntropometria.cadastrar($scope.antropometria)
            .then(function(dados) {
                $scope.mensagem = dados.mensagem;
                $scope.antropometria.data = new Date();
                $scope.antropometrias.push($scope.antropometria);
                if (dados.inclusao) $scope.antropometria = {};
            })
            .catch(function(erro) {
                $scope.mensagem = erro.mensagem;
            });
        }
    };

}]);