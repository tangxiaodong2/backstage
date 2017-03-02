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
// 采购预警
app.controller('procurementController', ['$scope','$rootScope', function($scope,$rootScope){
	$rootScope.currentId = $scope.data.list[1].id;
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
	$rootScope.currentId = $scope.data.list[2].id;
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
	$rootScope.currentId = $scope.data.list[3].id;
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
	$rootScope.currentId = $scope.data.list[4].id;
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
	$rootScope.currentId = $scope.data.list[6].id;
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
	// 删除
	$scope.toDel = function (){
		$rootScope.maskShow = true;
		$rootScope.delShow = true;
	}
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
	$rootScope.currentId = $scope.data.list[7].id;
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
	// 删除
	$scope.toDel = function (){
		$rootScope.maskShow = true;
		$rootScope.delShow = true;
	}
}])
//品规管理   
app.controller('varietySetController', ['$scope','$rootScope',  function($scope,$rootScope){
	$rootScope.currentId = $scope.data.list[9].id;
	// 初始化数据
	$scope.good = "品种";
	$scope.size = "规格";
	$scope.area = "产地";

	$scope.addVariety = function (){
		$rootScope.maskShow = true;
		$scope.addVarietyShow = true;
	};
	var hideAddVariety = function (){
		$rootScope.maskShow = false;
		$scope.addVarietyShow = false;
	};
	$scope.cancelAddVariety = function (){
		hideAddVariety();
	};
	$scope.submitAddVariety = function (){
		hideAddVariety();
	};
	// 删除
	$scope.toDel = function (){
		$rootScope.maskShow = true;
		$rootScope.delShow = true;
	};
	// 批量删除
	$scope.toBatchDel = function (){
		$rootScope.batchDelShow = true;
		$rootScope.maskShow = true;
	}
}])
//预警参数   
app.controller('parameterSetController', ['$scope','$rootScope', function($scope,$rootScope){
	$rootScope.currentId = $scope.data.list[10].id;
	// 初始化数据
	$scope.good = "品种";
	$scope.size = "规格";
	$scope.area = "产地";
	
	// 删除
	$scope.toDel = function (){
		$rootScope.maskShow = true;
		$rootScope.delShow = true;
	};

	$scope.addVariety = function (){
		$rootScope.maskShow = true;
		$scope.addVarietyShow = true;
	};
	var hideAddVariety = function (){
		$rootScope.maskShow = false;
		$scope.addVarietyShow = false;
	};
	$scope.cancelAddVariety = function (){
		hideAddVariety();
	};
	$scope.submitAddVariety = function (){
		hideAddVariety();
	};
	$scope.data = {
		"standardData":[
			{
				"level":"良好",
				"symbol":"α",
				"color":"deepGreen"
			},
			{
				"level":"正常",
				"symbol":"α",
				"color":"lightGreen"
			},
			{
				"level":"一般",
				"symbol":"α",
				"color":"normal"
			},
			{
				"level":"严重",
				"symbol":"α",
				"color":"yellow"
			},
			{
				"level":"非常严重",
				"symbol":"α",
				"color":"red"
			}
		],
		"compare":[
			{"symbol":"＞"},
			{"symbol":"≥"},
			{"symbol":"="},
			{"symbol":"＜"},
			{"symbol":"≤"}
		],
		"procurementPrice":{
			"title":"采购标准设置",
			"priceReal":"实际采购价格",
			"price2":"采购上限",
			"priceLimitShow":true
		},
		"inventoryPrice":{
			"title":"存货标准设置",
			"priceReal":"行情采集价",
			"price2":"成本价",
			"priceLimitShow":false
		},
		"salePrice1":{
			"title":"  销售标准设置（成本VS售价）",
			"priceReal":"实际销售价格",
			"price2":"成本价",
			"priceLimitShow":false
		},
		"salePrice2":{
			"title":"  销售标准设置（行情VS售价）",
			"priceReal":"实际销售价格",
			"price2":"行情价格",
			"priceLimitShow":false
		}
	};
	var hideSet = function (){
		$rootScope.maskShow = false;
		$scope.setShow = false;
	};
	var showSet = function (){
		$rootScope.maskShow = true;
		$scope.setShow = true;
	};
	$scope.cancelSet = function (){
		hideSet();
	};
	$scope.submitSet = function (){
		hideSet();
	};
	$scope.setProcurementLimit = function (){
		showSet();
		$scope.priceData = $scope.data.procurementPrice;
	};
	$scope.setInventoryLimit = function (){
		showSet();
		$scope.priceData = $scope.data.inventoryPrice;
	};
	$scope.setSaleLimit1 = function (){
		showSet();
		$scope.priceData = $scope.data.salePrice1;
	};
	$scope.setSaleLimit2 = function (){
		showSet();
		$scope.priceData = $scope.data.salePrice2;
	};
}])
// 图表统计
app.controller('graphicController', ['$scope','$rootScope', '$http',function($scope,$rootScope,$http){
	$rootScope.currentId = -2;
	// 模拟取数据
	$http({
		url:"./mock/demo1.json",
		method:"GET"
	}).then(function (response){
		console.log(response);
		console.log(response.data.data);
		for( let i = 0 ; i<response.data.data.length;i++){
			switch (response.data.data[i].id) {
				case 1:
					response.data.data[i].id = "非常严重"
					break;
				case 2:
					response.data.data[i].id = "严重"
					break;
				case 3:
					response.data.data[i].id = "一般"
					break;
				case 4:
					response.data.data[i].id = "良好"
					break;
				default:
					// statements_def
					break;
			}
		};
		console.log(response.data.data);
		
	},function (error){
		console.log(error)
	});
	$scope.data = {
		"title":"存货预警",
		"detail":[
		                {value:335, name:'非常严重'},
		                {value:310, name:'严重'},
		                {value:234, name:'一般'},
		                {value:135, name:'良好'},
		                {value:128, name:'正常'}
		            ]
	}
	// 采购预警
	 // 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById('procurement'));
    // 指定图表的配置项和数据
    var option = {
		    title : {
		        text: '采购预警',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['非常严重','严重','一般','良好','正常']
		    },
		    series : [
		        {
		            name: '采购预警',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:[
		                {value:335, name:'非常严重'},
		                {value:310, name:'严重'},
		                {value:234, name:'一般'},
		                {value:135, name:'良好'},
		                {value:1548, name:'正常'}
		            ],
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};

    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option);
    myChart1.on('click', function (params) {
    console.log(params);

	});

	// 存货预警
    var myChart2 = echarts.init(document.getElementById('inventory'));
    // 指定图表的配置项和数据
    var option = {
		    title : {
		        text: $scope.data.title,
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['非常严重','严重','一般','良好','正常']
		    },
		    series : [
		        {
		            name: '存货预警',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:$scope.data.detail,
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};

    // 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option);
    myChart2.on('click', function (params) {
   		 console.log(params);
	});

	// 销售预警(成本VS售价)
	var myChart3 = echarts.init(document.getElementById('sale1'));
    // 指定图表的配置项和数据
    var option = {
		    title : {
		        text: '销售预警(成本VS售价)',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['非常严重','严重','一般','良好','正常']
		    },
		    series : [
		        {
		            name: '销售预警(成本VS售价)',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:[
		                {value:335, name:'非常严重'},
		                {value:310, name:'严重'},
		                {value:234, name:'一般'},
		                {value:135, name:'良好'},
		                {value:1548, name:'正常'}
		            ],
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};

    // 使用刚指定的配置项和数据显示图表。
    myChart3.setOption(option);
    myChart3.on('click', function (params) {
    console.log(params);

	});
	
    // 销售预警(行情VS售价)
    var myChart4 = echarts.init(document.getElementById('sale2'));
    // 指定图表的配置项和数据
    var option = {
		    title : {
		        text: '销售预警(行情VS售价)',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['非常严重','严重','一般','良好','正常']
		    },
		    series : [
		        {
		            name: '销售预警(行情VS售价)',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:[
		                {value:335, name:'非常严重'},
		                {value:310, name:'严重'},
		                {value:234, name:'一般'},
		                {value:0, name:'良好'},
		                {value:1548, name:'正常'}
		            ],
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};

    // 使用刚指定的配置项和数据显示图表。
    myChart4.setOption(option);
    myChart4.on('click', function (params) {
    console.log(params);

	});
}])