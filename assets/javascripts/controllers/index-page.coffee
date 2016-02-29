window.app.controller 'IndexPageController',
  ['$scope', 'TweetEntity', 'tweetsRepository', ($scope, TweetEntity, tweetsRepository) ->

    $scope.tweets = null
    
    tweetsRepository.readAll().then (response) ->
      $scope.tweets = response
    
    $scope.addTweet = () ->
      newTweet = new TweetEntity(
        id: $scope.tweets.length || 0
        text: $scope.newTweetText.trim()
      )
      tweetsRepository.addTweet(newTweet).then (response) ->
        $scope.tweets = response
        $scope.newTweetText = ''

    $scope.removeTweet = (tweet) ->
      tweetsRepository.removeTweet(tweet).then (response) ->
        $scope.tweets = response

  ]