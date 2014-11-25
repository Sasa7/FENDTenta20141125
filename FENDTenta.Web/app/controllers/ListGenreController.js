function ListGenreController($scope, $http, $window) {

    //var onSuccess = function (promise) {
    //    $scope.genres = promise.data.value;
    //};

    //var onError = function (promise) {
    //    $scope.error = "Could not fetch data";
    //};

    //$http.get("http://localhost:19706/odata/Genres").then(onSuccess, onError);

    $http.get("http://localhost:19706/odata/Genres").success(function (data, status) {
        $scope.genres = data.value;
    });


    $scope.RemoveGenre = function (gen) {
        $http.delete("http://localhost:19706/odata/Genres/(" + gen.GenreId + ")")
            .success(function (genre) {
                $window.alert("Genre Deleted!");
                $scope.genres.pop(genre);
            });
    }
}