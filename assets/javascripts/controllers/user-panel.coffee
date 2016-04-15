window.app.controller 'UserPanelController',
  ['$rootScope', '$scope', 'authService', '$location', 'backendService', ($rootScope, $scope, auth, $location, backend) ->

    $scope.name = auth.getCurrentUser().email

    $scope.userSignOut = () ->
      auth.logout().then () ->
        $location.path('/signin')

  ]