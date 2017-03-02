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