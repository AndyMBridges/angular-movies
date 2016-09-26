(function() {

  "use strict";

  angular
    .module('moviesApp')
    .controller("moviesCtrl", function($scope, $http) {

        // Update API JSON function
        $scope.findMovie = function(){
          $http.get("http://www.omdbapi.com/?s=" + $scope.movieName).then(function(movies){

            $scope.movies = movies.data.Search;

        });
      };

        // Sorting function
        $scope.order = '-Title';

        $scope.active = function(x) {
            return x == $scope.order ? 'active' : '';
        };


    });

})();
