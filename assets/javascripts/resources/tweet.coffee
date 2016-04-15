# window.app.factory 'tweetResource',
#   ['$resource', ($resource) ->
#     $resource("http://localhost:4730/tweets", {id: '@id', text: '@text'},
#       readAll: {
#         method: 'GET'
#         isArray: true
#       }
#       addTweet: {
#         method: 'PUT'
#         isArray: true
#       }
#       removeTweet: {
#         method: 'DELETE'
#         isArray: true
#       }
#     )
#   ]