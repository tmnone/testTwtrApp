window.app.directive 'tweet',
  [ '$templateCache', ($templateCache) ->
    restrict: 'E'
    replace: true
    template: $templateCache.get("tweet.html")
  ]