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