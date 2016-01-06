app.service('carSvc', function($firebaseArray, $firebaseObject) {

  // car service
  var baseUrl = 'https://shining-fire-4473.firebaseio.com/';
  var carsRef = new Firebase(baseUrl + 'cars/');
  var cars = $firebaseArray(carsRef);

  this.testFcn = function() {
    console.log('service connected!');
  };

  this.getCars = function() {
    return cars;
  };

  this.getCar = function(carId) {
    var carRef = new Firebase(baseUrl + 'cars/' + carId);
    return $firebaseObject(carRef);
  };

  this.addCar = function(carObj) {
    cars.$add(carObj)
    .then(
      function(response) {
        console.log('Car added successfully.');
      }
    );
  };

  this.deleteCar = function(carObj) {
    cars.$remove(carObj)
    .then(
      function(response) {
        console.log('Car deleted successfully.');
      }
    );
  };
  // comments service, would be separate service for modularity

  this.getCarComments = function(carId) {
    var commentsRef = new Firebase(baseUrl + 'comments/' + carId);
    return $firebaseArray(commentsRef);
  };

  this.addComment = function(carId, commentObj) {
    var commentsRef = new Firebase(baseUrl + 'comments/' + carId);
    var comments = $firebaseArray(commentsRef);
    comments.$add(commentObj)
    .then(
      function(response) {
        console.log('New comment added for car.');
      }
    );
  };
});
