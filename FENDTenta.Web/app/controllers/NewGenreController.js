function NewGenreController($scope, $http, $window, $location) {
    $scope.AddGenre = function () {

        //var onSuccess = function (promise) {
        //    $window.alert("Genre saved!")
        //    $location.path('/');
        //};

        //var onError = function (promise) {
        //    $scope.error = "Something went wrong, could not Create New Genre";
        //};

        //$http.post("http://localhost:19706/odata/Genres", $scope.genre).then(onSuccess, onError);

        $http.post("http://localhost:19706/odata/Genres", $scope.genre).success(function () {
            $window.alert("Genre saved!");
            $location.path('/');
        });

    };
}