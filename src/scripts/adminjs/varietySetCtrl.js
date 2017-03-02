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