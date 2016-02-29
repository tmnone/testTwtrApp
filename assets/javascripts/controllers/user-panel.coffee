window.app.controller 'UserPanelController',
  ['$scope', 'authService', '$location', ($scope, auth, $location) ->

    $scope.name = 'User name'

    $scope.userSignOut = () ->
      auth.signOut()
      $location.path('/signin')

  ]