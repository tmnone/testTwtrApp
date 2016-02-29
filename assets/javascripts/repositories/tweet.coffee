window.app.factory 'tweetsRepository',
  ['tweetResource', (resource) ->
    class TweetsRepository

      readAll: () ->
        resource.readAll().$promise

      read: (id) ->
        resource.readAll().$promise

      addTweet: (tweet) ->
        resource.addTweet(tweet).$promise

      removeTweet: (tweet) ->
        resource.removeTweet(tweet).$promise

    new TweetsRepository()
  ]