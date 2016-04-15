window.app.controller 'SigninPageController',
  ['$scope', '$location', 'authService', 'UserEntity', ($scope, $location, auth, UserEntity) ->

    $scope.userSignIn = () ->
      auth.login($scope.email, $scope.password).then (res) ->
        $location.path('/')
  ]