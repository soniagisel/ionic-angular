app.controller('toDoCtrl', function($scope) {
    $scope.message = 'Example list item.';

    $scope.toDos = {
    	'Learn Angular',
    	'Test Ionic on Android',
    	'Attend to appointment with doctor'
    };
});