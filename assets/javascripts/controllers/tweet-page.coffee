window.app.controller 'TweetPageController',
  ['$rootScope', '$scope', '$routeParams', 'tweetsRepository', ($rootScope, $scope, $routeParams, tweetsRepository) ->
    

    console.log '$rootScope.currentUser', $rootScope.currentUser

    # $scope.tweetId = $routeParams.id
    # tweetsRepository.readAll().then (response) ->
    #   $scope.tweet = response[$scope.tweetId]

  ]