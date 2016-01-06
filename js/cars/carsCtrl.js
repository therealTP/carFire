app.controller('carsCtrl', function($scope, carSvc) {
  $scope.test = 'CarsCtrl Connected!';

  $scope.cars = carSvc.getCars();
  $scope.newCar = {}; // initial new car blank objects
  $scope.addCar = function(carObj) {
    carSvc.addCar(carObj);
    $scope.newCar = {};
  };

  $scope.deleteCar = function(carObj) {
    carSvc.deleteCar(carObj);
  };
});
