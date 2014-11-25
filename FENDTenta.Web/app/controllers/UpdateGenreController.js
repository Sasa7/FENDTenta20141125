function UpdateGenreController($scope, $http, $routeParams, $window, $location) {
    var id = $routeParams.GenreId;

    $http.get("http://localhost:19706/odata/Genres/(" + id + ")")
            .success(function (data) {
                $scope.Genre = data;
            });

    $scope.UpdateGenre = function (genre) {
        $http.put("http://localhost:19706/odata/Genres/(" + genre.GenreId + ")", genre)
        .success(function () {
            $window.alert("Genre with ID: " + genre.GenreId + " has been updated");
            $location.path('/');
        });
    };
}