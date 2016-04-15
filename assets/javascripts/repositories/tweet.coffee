window.app.factory 'tweetsRepository',
  ['backendService', (backend) ->
    class TweetsRepository

      readAll: (userId) ->
        backend.readAll(userId)

      addTweet: (tweet) ->
        backend.addTweet(tweet)

      removeTweet: (tweet) ->
        backend.removeTweet(tweet)

    new TweetsRepository()
  ]