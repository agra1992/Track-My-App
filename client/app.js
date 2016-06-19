var myapp = angular.module('myapp', ["ui.router", "ngAnimate", 'ui.bootstrap'])

myapp.config(function($stateProvider, $urlRouterProvider){
  
  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/")
  
  $stateProvider
  .state('home', {
        url: "/",
        templateUrl: "partials/home/home.html"
    })

    .state('route1', {
        url: "/route1",
        templateUrl: "partials/route1/route1.html"
    })
      .state('route1.list', {
          url: "/list",
          templateUrl: "partials/route1/route1.list.html",
          controller: function($scope){
            $scope.items = ["A", "List", "Of", "Items"];
          }
      })
      
    .state('route2', {
        url: "/route2",
        templateUrl: "partials/route2/route2.html"
    })
      .state('route2.list', {
          url: "/list",
          templateUrl: "partials/route2/route2.list.html",
          controller: function($scope){
            $scope.things = ["A", "Set", "Of", "Things"];
          }
      })
})