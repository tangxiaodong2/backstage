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