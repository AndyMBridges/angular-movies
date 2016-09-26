(function() {

  "use strict";

  angular
    .module('moviesApp',["ui.router","slugifier"])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/movies');

      $stateProvider
        .state('movies', {
            url: '/movies',
            templateUrl: 'components/movies.tpl.html',
            controller: 'moviesCtrl',
        })
        .state('movieView', {
            url: "/movies/:Title",
            templateUrl: 'components/view.tpl.html',
            controller: 'viewCtrl',
        });
    });

    // Slugify function
    function Slug($scope, Slug) {
      $scope.slugify = function(input) {
          $scope.mySlug = Slug.slugify(input);
      };
    }


})();
