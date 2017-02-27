// 控制器

var app = angular.module('app');

// 
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

// 登录
app.controller('loginController', ['$scope', function($scope){
 	$scope.class="pink"
 }]) 

// 系统首页
app.controller('homeController', ['$scope','$rootScope',function($scope,$rootScope){	
	$scope.data = {
		"list":
		[
			{"name":"数据监测","id":"-1","icon":"glyphicon glyphicon-tasks","blod":"blod","url":" "},
			{"name":"采购预警","url":"home.procurement","id":1},
			{"name":"存货预警","url":"home.inventory","id":2},
			{"name":"销售预警","url":"home.sale","id":3},
			{"name":"行情价格","url":"home.price","id":4},
			{"name":"权限管理","id":"-1","icon":"glyphicon glyphicon-book","blod":"blod","url":" "},
			{"name":"账号管理","url":"home.memberManagement","id":6},
			{"name":"角色管理","url":"home.authorityManagement","id":7},
			{"name":"基础设置","id":"-1","icon":"glyphicon glyphicon-cog","blod":"blod","url":" "},
			{"name":"品规管理","url":"home.varietySet","id":9},
			{"name":"预警参数","url":"home.parameterSet","id":10}
		]
	};
	$scope.li_click = function (i){
		$scope.currentId = i;
		$rootScope.nowId = i;
	};
	// $scope.currentId = $rootScope.nowId = 6 ;

}])
// 采购预警
app.controller('procurementController', ['$scope','$rootScope', function($scope,$rootScope){
	$scope.currentTab = 0;
	$scope.isShow = true;
	$scope.data = {
		"tabs":[
			{"text":"采购记录"},
			{"text":"回收站"}
		]	
	};
	$scope.tab = function (i){		
		if($scope.currentTab != i){
			$scope.isShow = !$scope.isShow;
			$scope.currentTab = i;
		}	
	};
	$scope.handle = function (){
		$rootScope.maskShow = true;
	}
}])
//存货预警
app.controller('inventoryController', ['$scope', function($scope){
	
}])
//销售预警
app.controller('saleController', ['$scope', function($scope){
	$scope.currentTab = 0;
	$scope.isShow = true;
	$scope.data = {
		"tabs":[
			{"text":"销售记录"},
			{"text":"回收站"}
		]	
	};
	$scope.tab = function (i){
		
		if($scope.currentTab != i){
			$scope.isShow = !$scope.isShow;
			$scope.currentTab = i;
		}	
	}
}])
//行情价格
app.controller('priceController', ['$scope', function($scope){
	
}])
//账号管理 
app.controller('memberManagementController', ['$scope', function($scope){
	$scope.data = {
		"list":[
			{"state":"全部"},
			{"state":"正常"},
			{"state":"已禁用"}
		]
	}
}])
//权限管理  
app.controller('authorityManagementController', ['$scope', function($scope){
	
}])
//品规管理   
app.controller('varietySetController', ['$scope', function($scope){
	
}])
//预警参数   
app.controller('parameterSetController', ['$scope', function($scope){
	
}])
// 图表统计
app.controller('graphicController', ['$scope', function($scope){
	
}])