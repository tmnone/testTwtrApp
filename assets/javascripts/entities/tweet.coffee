window.app.factory 'TweetEntity',
  [ ->
    class TweetEntity
      constructor: (attrs = {})->
        # @_name = "Tweets"
        @text = attrs.text
  ]