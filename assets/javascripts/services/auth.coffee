app.factory 'authService',
  ['$location', '$rootScope', 'localStorageService',
  ($location, $rootScope, localStorageService)->
    class Auth
      constructor: ->
        @store = localStorageService

      signIn: () ->
        @store.set('userIsLogged', true)

      signOut: () ->
        @store.set('userIsLogged', false)

      isLogged: () ->
        @store.get('userIsLogged')
    
    new Auth()
  ]