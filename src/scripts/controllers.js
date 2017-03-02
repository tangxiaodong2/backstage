// 全局控制器

var app = angular.module('app');

app.controller('appController', ['$scope','$rootScope', function($scope,$rootScope){
	$rootScope.username = "zhangsan";
	$rootScope.rootData = {
		"level":[
			{"dsc":"全部"},
			{"dsc":"非常严重"},
			{"dsc":"严重"},
			{"dsc":"一般"},
			{"dsc":"良好"},
			{"dsc":"正常"}
		],
		'level2':[
			{"dsc":"全部"},
			{"dsc":"稳中上扬"},
			{"dsc":"走平"},
			{"dsc":"趋势下降"},
			{"dsc":"快速上涨"}
		],
		'company':[
		]
	};

}])

