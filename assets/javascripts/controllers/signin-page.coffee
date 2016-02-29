window.app.controller 'SigninPageController',
  ['$scope', 'authService', 'UserEntity', ($scope, auth, UserEntity) ->

    $scope.userSignIn = () ->
      auth.signIn()
  ]