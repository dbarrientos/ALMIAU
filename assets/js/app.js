// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
   
   $urlRouterProvider.otherwise('/home');
   
   $stateProvider
       
       // HOME STATES AND NESTED VIEWS ========================================
       .state('home', {
			url: '/home',
			templateUrl: 'angular/home.ejs',
			controller: 'HomeCtrl'

       })
       .state('creacionRifa', {
			url: '/CreacionRifa',
			templateUrl: 'angular/CreacionRifa.ejs',
      controller: 'CreacionRifaCtrl'
       })       


});


routerApp.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);
routerApp.controller('CreacionRifaCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);