(function(){window.app=angular.module("twtrApp",["ngRoute","ngResource","templatescache","LocalStorageModule"]),window.app.config(["$routeProvider","$locationProvider","localStorageServiceProvider",function(e,t,n){return e.when("/tweet/:id",{templateUrl:"../pages/tweet.html",controller:"TweetPageController"}).when("/signin",{templateUrl:"../pages/signin.html",controller:"SigninPageController"}).otherwise({redirectTo:"/",templateUrl:"../pages/index.html",controller:"IndexPageController"}),t.html5Mode({enabled:!0,requireBase:!1}),n.setPrefix("twtrApp")}]),window.app.run(["$rootScope","$location","authService",function(e,t,n){return e.$on("$routeChangeStart",function(e){return n.isLogged()?void 0:t.path("/signin")})}])}).call(this),function(){window.TWEETS=[{id:0,text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ratione vero, placeat. Minus exercitationem, hic omnis consectetur ducimus, nisi eius a sequi itaque eos voluptatum quam fuga consequatur. Nisi, nemo?"},{id:1,text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ratione vero, placeat. Minus exercitationem, hic omnis consectetur ducimus, nisi eius a sequi itaque eos voluptatum quam fuga consequatur. Nisi, nemo?"},{id:2,text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ratione vero, placeat. Minus exercitationem, hic omnis consectetur ducimus, nisi eius a sequi itaque eos voluptatum quam fuga consequatur. Nisi, nemo?"},{id:3,text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ratione vero, placeat. Minus exercitationem, hic omnis consectetur ducimus, nisi eius a sequi itaque eos voluptatum quam fuga consequatur. Nisi, nemo?"}]}.call(this),function(){window.app.controller("IndexPageController",["$scope","TweetEntity","tweetsRepository",function(e,t,n){return e.tweets=null,n.readAll().then(function(t){return e.tweets=t}),e.addTweet=function(){var i;return i=new t({id:e.tweets.length||0,text:e.newTweetText.trim()}),n.addTweet(i).then(function(t){return e.tweets=t,e.newTweetText=""})},e.removeTweet=function(t){return n.removeTweet(t).then(function(t){return e.tweets=t})}}])}.call(this),function(){window.app.controller("SigninPageController",["$scope","authService","UserEntity",function(e,t,n){return e.userSignIn=function(){return t.signIn()}}])}.call(this),function(){window.app.controller("TweetPageController",["$scope","$routeParams","tweetsRepository",function(e,t,n){return e.tweetId=t.id,n.readAll().then(function(t){return e.tweet=t[e.tweetId]})}])}.call(this),function(){window.app.controller("UserPanelController",["$scope","authService","$location",function(e,t,n){return e.name="User name",e.userSignOut=function(){return t.signOut(),n.path("/signin")}}])}.call(this),function(){window.app.directive("space",["$templateCache",function(e){return{restrict:"E",replace:!0,template:e.get("space.html")}}])}.call(this),function(){window.app.directive("tweetView",["$templateCache",function(e){return{restrict:"E",replace:!0,template:e.get("tweet-page.html")}}])}.call(this),function(){window.app.directive("tweet",["$templateCache",function(e){return{restrict:"E",replace:!0,template:e.get("tweet.html")}}])}.call(this),function(){window.app.directive("userPanel",["$templateCache",function(e){return{restrict:"E",replace:!0,scope:"=",template:e.get("user-panel.html")}}])}.call(this),function(){window.app.factory("TweetEntity",[function(){var e;return e=function(){function e(e){null==e&&(e={}),this.id=e.id||0,this.user_id=e.user_id||0,this.text=e.text}return e}()}])}.call(this),function(){window.app.factory("UserEntity",[function(){var e;return e=function(){function e(e){null==e&&(e={}),this.id=e.id||0,this.email=e.email}return e}()}])}.call(this),function(){window.app.factory("tweetsRepository",["tweetResource",function(e){var t;return new(t=function(){function t(){}return t.prototype.readAll=function(){return e.readAll().$promise},t.prototype.read=function(t){return e.readAll().$promise},t.prototype.addTweet=function(t){return e.addTweet(t).$promise},t.prototype.removeTweet=function(t){return e.removeTweet(t).$promise},t}())}])}.call(this),function(){window.app.factory("tweetResource",["$resource",function(e){return e("http://localhost:4730/tweets",{id:"@id",text:"@text"},{readAll:{method:"GET",isArray:!0},addTweet:{method:"PUT",isArray:!0},removeTweet:{method:"DELETE",isArray:!0}})}])}.call(this),function(){app.factory("authService",["$location","$rootScope","localStorageService",function(e,t,n){var i;return new(i=function(){function e(){this.store=n}return e.prototype.signIn=function(){return this.store.set("userIsLogged",!0)},e.prototype.signOut=function(){return this.store.set("userIsLogged",!1)},e.prototype.isLogged=function(){return this.store.get("userIsLogged")},e}())}])}.call(this);