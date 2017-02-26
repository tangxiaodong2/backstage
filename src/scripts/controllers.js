// 控制器

var app = angular.module('app');

// 
app.controller('appController', ['$scope', function($scope){
	
}])

// 登录
app.controller('loginController', ['$scope', function($scope){
 	$scope.class="pink"
 }]) 

// 系统首页
app.controller('homeController', ['$scope','$rootScope', function($scope,$rootScope){
	$rootScope.username = "zhangsan"
}])

