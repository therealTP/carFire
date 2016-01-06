var app = angular.module('carFire', ['ui.router', 'firebase']);

app.config(function($urlRouterProvider, $stateProvider){
  $stateProvider
  .state('cars', {
    url: '/cars',
    templateUrl: 'js/cars/carsTmpl.html',
    controller: 'carsCtrl'
  })
  .state('car', {
    url: '/car/:id',
    templateUrl: 'js/car/carTmpl.html',
    controller: 'carCtrl'
  });

  $urlRouterProvider
  .otherwise('/cars');
});
