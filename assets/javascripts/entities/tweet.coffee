window.app.factory 'TweetEntity',
  [ ->
    class TweetEntity
      constructor: (attrs = {})->
        @id = attrs.id || 0
        @user_id = attrs.user_id || 0
        @text = attrs.text
  ]