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