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

        # Init 
        @bl.initApp(appId, secretKey, version)

        @UserService = @bl.UserService
        @TweetService = @bl.Persistence.of("Tweets")

      promiseWrapper: () ->
        service = arguments[0]
        method = arguments[1]
        defer = $q.defer()
        blAsync = new @bl.Async(defer.resolve, defer.reject)
        i = 2
        args = []

        while i < arguments.length
          args.push arguments[i]
          i++
        args.push blAsync
        service[method].apply(service, args)
        defer.promise

      login: (email, pass) ->
        @promiseWrapper(@UserService, 'login', email, pass, true)

      logout: () ->
        @promiseWrapper(@UserService, 'logout')

      readAll: (ownerId) ->
        query = { condition: "ownerId = '#{ownerId}'" }
        @promiseWrapper(@TweetService, 'find', query)

      addTweet: (tweet) ->
        @promiseWrapper(@TweetService, 'save', tweet)

      removeTweet: (tweet) ->
        @promiseWrapper(@TweetService, 'remove', tweet)

    new Backend()
  ]