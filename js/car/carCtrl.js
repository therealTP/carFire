app.controller('carCtrl', function($scope, $stateParams, carSvc) {
  $scope.test = 'Car Ctrl Connected';
  $scope.id = $stateParams.id;
  $scope.carDetails = carSvc.getCar($scope.id);
  $scope.comments = carSvc.getCarComments($scope.id);
  $scope.addComment = function(carId, commentText) {
    // console.log(carId, commentText);
    carSvc.addComment(carId, {text: commentText});
    $scope.commentText = "";
  };
});
