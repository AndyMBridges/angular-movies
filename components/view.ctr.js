(function() {

  "use strict";

  angular
    .module('moviesApp')
    .controller("viewCtrl", function($scope, $http, $stateParams) {

        // Get current title
        $scope.title = $stateParams.Title;

          // Add title to JSON URL
          $http.get("http://www.omdbapi.com/?t=" + $scope.title + "&y=&plot=full&r=json").then(function(movie){

            // Save
            $scope.movie = movie.data;


        });


    });

})();
