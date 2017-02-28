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
	$scope.exit = function (){
		$rootScope.maskShow = true;
		$scope.exitShow = true;
	};
	var hide = function(){
		$rootScope.maskShow = false;
		$scope.exitShow = false;
	};
	$scope.cancel = function (){
		hide();
	};
	$scope.doExit = function (){
		hide();
	};
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
		$scope.addCommentShow =true;
	};
	var hideComment = function (){
		$rootScope.maskShow = false;
		$scope.addCommentShow =false;
	};
	$scope.cancelComment = function (){
		hideComment();
	};
	$scope.submitComment = function (){
		hideComment();
	};
}])
//存货预警
app.controller('inventoryController', ['$scope','$rootScope', function($scope,$rootScope){
	$scope.handle = function (){
		$rootScope.maskShow = true;
		$scope.addCommentShow =true;
	};
	var hideComment = function (){
		$rootScope.maskShow = false;
		$scope.addCommentShow =false;
	};
	$scope.cancelComment = function (){
		hideComment();
	};
	$scope.submitComment = function (){
		hideComment();
	};
}])
//销售预警
app.controller('saleController', ['$scope','$rootScope', function($scope,$rootScope){
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
	};
	$scope.handle = function (){
		$rootScope.maskShow = true;
		$scope.addCommentShow =true;
	};
	var hideComment = function (){
		$rootScope.maskShow = false;
		$scope.addCommentShow =false;
		$scope.customersDetailShow =false;
	};
	$scope.cancelComment = function (){
		hideComment();
	};
	$scope.submitComment = function (){
		hideComment();
	};
	$scope.customersDetail = function(){
		$rootScope.maskShow = true;
		$scope.customersDetailShow = true;
	}
	$scope.closeDetail= function(){
		hideComment();
	}
}])
//行情价格
app.controller('priceController', ['$scope','$rootScope', function($scope,$rootScope){
	$scope.handle = function (){
		$rootScope.maskShow = true;
		$scope.addCommentShow =true;
	};
	var hideComment = function (){
		$rootScope.maskShow = false;
		$scope.addCommentShow =false;
	};
	$scope.cancelComment = function (){
		hideComment();
	};
	$scope.submitComment = function (){
		hideComment();
	};
}])
//账号管理 
app.controller('memberManagementController', ['$scope','$rootScope', function($scope,$rootScope){
	$scope.data = {
		"list":[
			{"state":"全部"},
			{"state":"正常"},
			{"state":"已禁用"}
		]
	};
	$scope.createMember = function (){
		$rootScope.maskShow = true;
		$scope.createMemberShow = true;
	};
	var hideCreateMember = function (){
		$rootScope.maskShow = false;
		$scope.createMemberShow =false;
	};
	$scope.cancelCreateMember = function (){
		hideCreateMember();
	};
	$scope.submitCreateMember = function (){
		hideCreateMember();
	};
	// 添加品规
	$scope.data.goods=[
		{"good":"三七","size":"统货","area":"四川省成都市青羊工业园区电子商务大厦"}
	];
	// 初始化数据
	$scope.good = "品种";
	$scope.size = "规格";
	$scope.area = "产地";
	// 添加品规数据
	$scope.addGoods = function (){
		$scope.data.goods.push({"good":$scope.good,"size":$scope.size,"area":$scope.area})
	}
	// 删除
	$scope.delGoods = function (i){
		$scope.data.goods.splice(i,1)
	}
}])
//权限管理  
app.controller('authorityManagementController', ['$scope','$rootScope', function($scope,$rootScope){
	$scope.createTeam = function (){
		$rootScope.maskShow = true;
		$scope.createTeamShow = true;
	};
	var hideCreateTeam = function (){
		$rootScope.maskShow = false;
		$scope.createTeamShow =false;
	};
	$scope.cancelCreateTeam = function (){
		hideCreateTeam();
	};
	$scope.doCreateTeam = function (){
		hideCreateTeam();
	};
	$scope.redact = function (){
		$rootScope.maskShow = true;
		$scope.teamMember = true;
	};
	var hideTeamMember = function (){
		$rootScope.maskShow = false;
		$scope.teamMember =false;
	};
	$scope.cancelTeamMember = function (){
		hideTeamMember();
	};
	$scope.submitTeamMember = function (){
		hideTeamMember();
	}
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