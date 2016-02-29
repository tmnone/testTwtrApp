window.app.factory 'UserEntity',
  [ ->
    class UserEntity
      constructor: (attrs = {})->
        @id = attrs.id || 0
        @email = attrs.email
  ]