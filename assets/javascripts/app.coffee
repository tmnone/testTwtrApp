window.app = angular.module('twtrApp', ['ngRoute', 'ngResource', 'templatescache', 'LocalStorageModule'])

window.app.config(['$routeProvider', '$locationProvider', 'localStorageServiceProvider', ($routeProvider, $locationProvider, localStorageServiceProvider) ->
  
  $routeProvider
    .when('/tweet/:id', {
      templateUrl: '../pages/tweet.html'
      controller: 'TweetPageController'
    })
    .when('/signin', {
      templateUrl: '../pages/signin.html'
      controller: 'SigninPageController'
    })
    .otherwise({
      redirectTo: '/'
      templateUrl: '../pages/index.html'
      controller: 'IndexPageController'
    })
  
  $locationProvider.html5Mode
    enabled: true
    requireBase: false

  localStorageServiceProvider.setPrefix('twtrApp')
])

window.app.run(['$rootScope', '$location', 'authService', ($rootScope, $location, auth) ->

  $rootScope.$on '$routeChangeStart', (e) ->
    $location.path('/signin') unless auth.isLogged()
])
