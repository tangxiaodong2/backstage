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