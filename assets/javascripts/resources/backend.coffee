app.factory 'backendService',
  [ '$q', 'TweetEntity', ($q, TweetEntity) ->
    class Backend
      constructor: ->
        # App Config
        appId = '25D38AE7-3C30-2CBE-FF70-A1C71CAF3F00'
        secretKey = 'D8C194D6-66C5-F9AF-FFF4-95F759FB8500'
        version = 'v1'

        # Wrappers
        @bl = Backendless
        @defer = $q.defer()
        @blAsync = new @bl.Async(@defer.resolve, @defer.reject)
        @bl.enablePromises()
        @query = new @bl.DataQuery()
        @tweets = new TweetEntity()
        
        # Init 
        @bl.initApp(appId, secretKey, version)


      login: (email, pass) ->
        @bl.UserService.login(email, pass, true, @blAsync)
        @defer.promise

      logout: () ->
        @bl.UserService.logout(@blAsync)
        @defer.promise

      readAll: (ownerId) ->
        @query = { condition: "ownerId = '#{ownerId}' " }
        @bl.Persistence.of( "Tweets" ).find( @query, @blAsync )
        @defer.promise

      addTweet: (tweet) ->
        @bl.Persistence.of( "Tweets" ).save( tweet, @blAsync )
        @defer.promise

      removeTweet: (tweet) ->
        @bl.Persistence.of( "Tweets" ).remove( tweet, @blAsync )
        @defer.promise

    new Backend()
  ]