/**
 * Created by huangguowen on 2017/3/2.
 */

var app = angular.module('app');

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