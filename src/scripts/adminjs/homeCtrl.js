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
		$rootScope.currentId = i;
	};
	$scope.exit = function (){
		$rootScope.maskShow = true;
		$scope.exitShow = true;
	};
	var hide = function(){
		$rootScope.maskShow = false;
		$rootScope.delShow = false;
		$rootScope.batchDelShow = false;
		$scope.exitShow = false;
	};
	$scope.cancel = function (){
		hide();
	};
	$scope.doExit = function (){
		hide();
	};
	$scope.doDel = function (){
		hide();
	}
}])