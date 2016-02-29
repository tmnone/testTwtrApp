window.app.controller 'TweetPageController',
  ['$scope', '$routeParams', 'tweetsRepository', ($scope, $routeParams, tweetsRepository) ->
    
    $scope.tweetId = $routeParams.id
    tweetsRepository.readAll().then (response) ->
      $scope.tweet = response[$scope.tweetId]

  ]