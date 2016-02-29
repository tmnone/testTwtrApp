window.app.directive 'space',
  [ '$templateCache', ($templateCache) ->
    restrict: 'E'
    replace: true
    template: $templateCache.get("space.html")
  ]