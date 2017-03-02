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