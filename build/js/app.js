(function(){window.app=angular.module("twtrApp",["ngRoute","ngResource","templatescache","LocalStorageModule"]),window.app.config(["$routeProvider","$locationProvider","localStorageServiceProvider",function(e,t,n){return e.when("/tweet/:id",{templateUrl:"../pages/tweet.html",controller:"TweetPageController"}).when("/signin",{templateUrl:"../pages/signin.html",controller:"SigninPageController"}).otherwise({redirectTo:"/",templateUrl:"../pages/index.html",controller:"IndexPageController"}),t.html5Mode(),n.setPrefix("twtrApp")}]),window.app.run(["$rootScope","$location","authService",function(e,t,n){return e.$on("$routeChangeStart",function(e){return console.log("user isLogged",n.isLogged()),n.isLogged()?void 0:t.path("/signin")})}])}).call(this),function(){window.app.controller("IndexPageController",["$rootScope","$scope","TweetEntity","tweetsRepository","authService","backendService",function(e,t,n,r,o,i){return t.currentUser=o.getCurrentUser(),t.tweets=null,console.log("userId",t.currentUser.ownerId),t.init=function(){return t.readAll()},t.readAll=function(){return r.readAll(t.currentUser.ownerId).then(function(e){return console.log("readAll tweets",e.data),t.tweets=e.data},function(e){return console.log("readAll error",e)})},t.addTweet=function(){var e;return e=new n({text:t.newTweetText.trim()}),r.addTweet(e).then(function(e){return t.readAll(),t.newTweetText=""},function(e){return console.log("addTweet error",e)})},t.removeTweet=function(e){return r.removeTweet(e).then(function(e){return t.readAll()},function(e){return console.log("removeTweet error",e)})},t.init()}])}.call(this),function(){window.app.controller("SigninPageController",["$scope","$location","authService","UserEntity",function(e,t,n,r){return e.userSignIn=function(){return n.login(e.email,e.password).then(function(e){return t.path("/")})}}])}.call(this),function(){window.app.controller("TweetPageController",["$rootScope","$scope","$routeParams","tweetsRepository",function(e,t,n,r){return console.log("$rootScope.currentUser",e.currentUser)}])}.call(this),function(){window.app.controller("UserPanelController",["$rootScope","$scope","authService","$location","backendService",function(e,t,n,r,o){return t.name=n.getCurrentUser().email,t.userSignOut=function(){return n.logout().then(function(){return r.path("/signin")})}}])}.call(this),function(){window.app.directive("space",["$templateCache",function(e){return{restrict:"E",replace:!0,template:e.get("space.html")}}])}.call(this),function(){window.app.directive("tweetView",["$templateCache",function(e){return{restrict:"E",replace:!0,template:e.get("tweet-page.html")}}])}.call(this),function(){window.app.directive("tweet",["$templateCache",function(e){return{restrict:"E",replace:!0,template:e.get("tweet.html")}}])}.call(this),function(){window.app.directive("userPanel",["$templateCache",function(e){return{restrict:"E",replace:!0,scope:"=",template:e.get("user-panel.html")}}])}.call(this),function(){window.app.factory("TweetEntity",[function(){var e;return e=function(){function e(e){null==e&&(e={}),this.text=e.text}return e}()}])}.call(this),function(){window.app.factory("UserEntity",[function(){var e;return e=function(){function e(e){null==e&&(e={}),this.id=e.id||0,this.email=e.email}return e}()}])}.call(this),function(){window.app.factory("tweetsRepository",["backendService",function(e){var t;return new(t=function(){function t(){}return t.prototype.readAll=function(t){return e.readAll(t)},t.prototype.addTweet=function(t){return e.addTweet(t)},t.prototype.removeTweet=function(t){return e.removeTweet(t)},t}())}])}.call(this),function(){app.factory("backendService",["$q","TweetEntity",function(e,t){var n;return new(n=function(){function n(){var n,r,o;n="25D38AE7-3C30-2CBE-FF70-A1C71CAF3F00",r="D8C194D6-66C5-F9AF-FFF4-95F759FB8500",o="v1",this.bl=Backendless,this.defer=e.defer(),this.blAsync=new this.bl.Async(this.defer.resolve,this.defer.reject),this.bl.enablePromises(),this.query=new this.bl.DataQuery,this.tweets=new t,this.bl.initApp(n,r,o)}return n.prototype.login=function(e,t){return this.bl.UserService.login(e,t,!0,this.blAsync),this.defer.promise},n.prototype.logout=function(){return this.bl.UserService.logout(this.blAsync),this.defer.promise},n.prototype.readAll=function(e){return this.query={condition:"ownerId = '"+e+"' "},this.bl.Persistence.of("Tweets").find(this.query,this.blAsync),this.defer.promise},n.prototype.addTweet=function(e){return this.bl.Persistence.of("Tweets").save(e,this.blAsync),this.defer.promise},n.prototype.removeTweet=function(e){return this.bl.Persistence.of("Tweets").remove(e,this.blAsync),this.defer.promise},n}())}])}.call(this),function(){}.call(this),function(){app.factory("authService",["$location","$rootScope","localStorageService","backendService",function(e,t,n,r){var o;return new(o=function(){function e(){}return e.prototype.login=function(e,t){return r.login(e,t).then(function(e){return n.set("userIsLogged",!0),n.set("currentUser",e)},function(e){return console.log("Error",e)})},e.prototype.logout=function(){return r.logout().then(function(){return n.remove("userIsLogged"),n.remove("currentUser")})},e.prototype.getCurrentUser=function(){return n.get("currentUser")},e.prototype.isLogged=function(){return n.get("userIsLogged")},e}())}])}.call(this);