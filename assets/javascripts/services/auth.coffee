app.factory 'authService',
  ['$location', '$rootScope', 'localStorageService', 'backendService',
  ($location, $rootScope, localStorageService, backend)->
    class Auth
      
      login: (email, pass) ->
        backend.login(email, pass).then ((user) ->
          localStorageService.set('userIsLogged', true)
          localStorageService.set('currentUser', user)
        ), (error) ->
          console.log 'Error', error

      logout: () ->
        backend.logout().then () ->
          localStorageService.remove('userIsLogged')
          localStorageService.remove('currentUser')

      getCurrentUser: () ->
        localStorageService.get('currentUser')

      isLogged: () ->
        localStorageService.get('userIsLogged')
    
    new Auth()
  ]