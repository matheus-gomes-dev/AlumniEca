var myApp = angular.module('AlumniApp', []);

myApp.controller('AlumniController', ['$scope', function($scope) {
  document.getElementById("quemSomos").style.background = "#112599";
  
  function mudaSecao(destino){
    var abasID = ["quemSomos","noticias","fotos","eventos","bancoDeOportunidades","cadastreSe","doacoes"];
    var i;
    for (i=0; i<abasID.length; i++){
      if(abasID[i]!=destino)
        document.getElementById(abasID[i]).style.background = "#5c5cd6";
      else
        document.getElementById(abasID[i]).style.background = "#112599";
    }
  }
  
  $scope.QuemSomos = function(){
    document.getElementById("QuemSomosContainer").style.display = "block";
    document.getElementById("evento").style.display = "none";
    mudaSecao("quemSomos");
  }
  
  $scope.Noticias = function(){
    document.getElementById("QuemSomosContainer").style.display = "none";
    //document.getElementById("noticias").style.background = "#112599";
    document.getElementById("evento").style.display = "none";
    mudaSecao("noticias");
  }
  
  $scope.Fotos = function(){
    document.getElementById("QuemSomosContainer").style.display = "none";
    document.getElementById("evento").style.display = "none";
    mudaSecao("fotos");
  }
  
  $scope.Eventos = function(){
    document.getElementById("QuemSomosContainer").style.display = "none";
    document.getElementById("evento").style.display = "block";
    mudaSecao("eventos");
  }
  
  $scope.Oportunidades = function(){
    document.getElementById("QuemSomosContainer").style.display = "none";
    document.getElementById("evento").style.display = "none";
    mudaSecao("bancoDeOportunidades");
  }
  
  $scope.CadastreSe = function(){
    document.getElementById("QuemSomosContainer").style.display = "none";
    document.getElementById("evento").style.display = "none";
    mudaSecao("cadastreSe");
  }
  
  $scope.Doacoes = function(){
    document.getElementById("QuemSomosContainer").style.display = "none";
    document.getElementById("evento").style.display = "none";
    mudaSecao("doacoes");
  }
  
  
  
}]);
