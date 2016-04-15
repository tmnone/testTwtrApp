window.app.controller 'IndexPageController',
  ['$rootScope', '$scope', 'TweetEntity', 'tweetsRepository', 'authService', 'backendService', ($rootScope, $scope, TweetEntity, tweetsRepository, auth, backend) ->


    $scope.currentUser = auth.getCurrentUser()
    $scope.tweets = null

    console.log 'userId', $scope.currentUser.ownerId

    $scope.init = () ->
      $scope.readAll()

    $scope.readAll = () ->
      tweetsRepository.readAll($scope.currentUser.ownerId).then ((response) ->
        console.log 'readAll tweets', response.data
        $scope.tweets = response.data
      ), (error) ->
        console.log 'readAll error', error
    
    $scope.addTweet = () ->
      newTweet = new TweetEntity(
        text: $scope.newTweetText.trim()
      )
      tweetsRepository.addTweet(newTweet).then ((response) ->
        $scope.readAll()
        $scope.newTweetText = ''
      ), (error) ->
        console.log 'addTweet error', error

    $scope.removeTweet = (tweet) ->
      tweetsRepository.removeTweet(tweet).then ((response) ->
        $scope.readAll()
      ), (error) ->
        console.log 'removeTweet error', error

    $scope.init()
  ]