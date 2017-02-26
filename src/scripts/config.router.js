angular.module('app', ['ui.router']).
//配置路由
config(['$stateProvider','$urlMatcherFactoryProvider','$urlRouterProvider',function($stateProvider,$urlMatcherFactoryProvider,$urlRouterProvider) {
	$urlMatcherFactoryProvider.caseInsensitive(true);//url忽略大小写
	$urlRouterProvider.otherwise('/home');//默认跳转页面
	$stateProvider.state("home",{
		url:"/home",//路由名
		templateUrl:'./src/scripts/templates/home.html',
		controller:'homeController',
		controllerAs:'homeCtrl'
	}).state('login',{//状态名
		url:"/login",//路由名
		templateUrl:'./src/scripts/templates/login.html',
		controller:'loginController',
		controllerAs:'loginCtrl'
	})
}])

