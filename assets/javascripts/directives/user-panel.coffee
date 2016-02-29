window.app.directive 'userPanel',
  [ '$templateCache', ($templateCache) ->
    restrict: 'E'
    replace: true
    scope: '='
    template: $templateCache.get('user-panel.html')

  ]