window.app.directive 'tweetView',
  [ '$templateCache', ($templateCache) ->
    restrict: 'E'
    replace: true
    template: $templateCache.get("tweet-page.html")
  ]