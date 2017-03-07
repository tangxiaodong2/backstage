/**
 * Created by huangguowen on 2017/3/2.
 */

var app = angular.module('app');

//账号管理
app.controller('memberManagementController', ['$scope','$rootScope','$http', function($scope,$rootScope,$http){
    $rootScope.currentId = $scope.data.list[6].id;




    // 删除
    $scope.toDel = function (){
        $rootScope.maskShow = true;
        $rootScope.delShow = true;
    }






    //*************************************************************************

    //账号信息
    var _allCodeSpec=null;//一个品种所有组合关系的品规
    var _action=0;
    var _oldEmployeeId = 0;

    $scope.UserInfo= {
        employeeId: 0,
        account: '',
        password: '',
        salt: '',
        type: 0,
        status: 0,
        name: '',
        mobile: '',
        sex: 0,
        birthday: 0,
        aliasName: '',
        department: {departmentId: 0},
        position: {positionId: 0},
        employeeNo: '',
        level: '',
        create_time: 0,
        create_by: 0,
        listSpecVarietyId:[],
        action:0
    };
    $scope.SearchInfo= {
        account: '',
        status: '-1',
        name: '',
        mobile: '',
        department: {departmentId: 0,name:''},
        position: {positionId: 0,name:''},
        codeSpecAreaName:''
    };
    $scope.contactCodeName="";
    $scope.showDdlSpec=false;
    $scope.areaCodeSpec=null;
    $scope.contactCodeSpec=[];

    //关闭窗口
    $scope.cancelCreateMember = function (){
        $rootScope.maskShow = false;
        $scope.createMemberShow =false;
    };

    //添加账号
    $scope.createMember = function (){
        _action=1;

        $scope.UserInfo.account='';
        $scope.UserInfo.name='';
        $scope.UserInfo.mobile='';
        $scope.UserInfo.department.departmentId='1';
        $scope.UserInfo.position.positionId='1';
        $scope.UserInfo.listSpecVarietyId=[];

        $scope.contactCodeName="";
        $scope.contactCodeSpec=[];//当前要关联的品规

        $rootScope.maskShow = true;
        $scope.createMemberShow = true;
    };

    //编辑账号
    $scope.editMember = function (index){
        _action=0;

        var accountObj = $scope.AccountView[index];
        _oldEmployeeId = accountObj.employee_id;

        $scope.UserInfo.account=accountObj.account;
        $scope.UserInfo.name=accountObj.name;
        $scope.UserInfo.mobile= parseInt(accountObj.mobile);
        $scope.UserInfo.department.departmentId=accountObj.department_id.toString();
        $scope.UserInfo.position.positionId=accountObj.position_id.toString();
        $scope.UserInfo.listSpecVarietyId=[];//list品规id

        $scope.contactCodeName="";
        $scope.contactCodeSpec=[];//已经关联的品规

        for(var i=0;i<accountObj.listEmployeeSpecVar.length;i++) {
            var specVar = accountObj.listEmployeeSpecVar[i].specVariety;
            var codeSpec = {};
            codeSpec.sv_id = specVar.svId;
            codeSpec.variety_id = specVar.variety.varietyId;
            codeSpec.variety_id_name = specVar.variety.varietyName;
            codeSpec.spec_id = specVar.spec.specId;
            codeSpec.spec_id_name = specVar.spec.specName;
            codeSpec.province_id = specVar.productionProvinceId;
            codeSpec.city_id = specVar.productionCityId;
            codeSpec.county_id = specVar.productionCountyId;
            codeSpec.all_area_name = codeSpec.province_id + '' + codeSpec.city_id + '' + codeSpec.county_id;

            $scope.contactCodeSpec.push(codeSpec);
        }

        $scope.showDdlSpec=false;
        $rootScope.maskShow = true;
        $scope.createMemberShow = true;
    };

    //获取部门
    $http.get("/basedata/getalldepartment")
        .success(function (response) {
                $scope.ddlDept = response.data;
                $scope.UserInfo.department.departmentId = response.data[0].departmentId.toString();
            }
        ).error(function(error){
        console.log(error);
    });

    ////获取职位
    $http.get("/basedata/getallposition")
        .success(function (response) {
                $scope.ddlPos = response.data;
                $scope.UserInfo.position.positionId = response.data[0].positionId.toString();
            }
        ).error(function(error){
        console.log(error);
    });

    //获取关联品规信息
    $scope.getContactCodeSpec = function (){

        var url = "/account/getcontactcodespec?codeName="+$scope.contactCodeName+"";

        $http.get(url)
            .success(function (response) {

                    if(response.result=="error")
                    {
                        $scope.showDdlSpec=false;
                        alert(response.desc);
                        return;
                    }

                    $scope.showDdlSpec=true;

                    $scope.listSpec = response.data.listSpec;//在品规中一个品名对应的所有规格
                    $scope.ddlSpecId = response.data.listSpec[0].keyid.toString();

                    _allCodeSpec= response.data.listCodeSpec;

                    $scope.ddlSpecChange();


                }
            ).error(function(error){
            console.log(error);
        });

    };

    //选规格
    $scope.ddlSpecChange = function (){

        var specId = $scope.ddlSpecId;
        var listCodeSpecArea = [];

        for(var i=0;i<_allCodeSpec.length;i++)
        {
            var codeSpec = _allCodeSpec[i];

            if(codeSpec.spec_id==specId)
            {
                listCodeSpecArea.push(codeSpec);
            }

        }

        $scope.areaCodeSpec = listCodeSpecArea;//关联地区ddl数据源，一个品名一个规格对应所有地区的品规
        $scope.ddlAreaCodeSpec = listCodeSpecArea[0];
    };

    // 添加品规数据
    $scope.addCodeSpec = function () {

        var isHave = false;
        var svId =  $scope.ddlAreaCodeSpec.sv_id;

        for (var i = 0; i < $scope.contactCodeSpec.length; i++) {

            if ($scope.contactCodeSpec[i].sv_id == svId) {
                isHave=true;
            }

        }

        if (isHave == false) {
            $scope.contactCodeSpec.push($scope.ddlAreaCodeSpec);
        } else {
            alert("已经添加了该品规");
        }
    }

    // 删除品规
    $scope.delCodeSpec = function (index){
        $scope.contactCodeSpec.splice(index,1)
    }

    //提交添加账号
    $scope.submitCreateMember = function (){

        if($scope.UserInfo.account=="")
        {
            alert("用户名不能为空");
            return;
        }

        if($scope.UserInfo.name=="")
        {
            alert("姓名不能为空");
            return;
        }

        if($scope.UserInfo.mobile=="")
        {
            alert("手机号不能为空");
            return;
        }

        for(var i=0;i<$scope.contactCodeSpec.length;i++) {
            var codeSpec = $scope.contactCodeSpec[i];
            $scope.UserInfo.listSpecVarietyId.push(codeSpec.sv_id);
        }

        var url = "";

        if(_action==1)
        {
            $scope.UserInfo.action = 1;

            url = "/account/addaccount";
        }else
        {
            $scope.UserInfo.employeeId = _oldEmployeeId;
            $scope.UserInfo.action = 0;

            url = "/account/editaccount";
        }

        $http({
            method: "post",
            data: $scope.UserInfo,
            url: url
        }).success(function (response) {

            if(response.result=="error")
            {
                alert(response.desc);
            }else {
                alert("操作成功");
                $scope.btnSearch();
                $scope.cancelCreateMember();
            }

        }).error(function(error){
            console.log(error);
        });

    };


    //重置搜索
    $scope.btnClear = function (){

        $scope.SearchInfo.status='-1';
        $scope.SearchInfo.account='';
        $scope.SearchInfo.name='';
        $scope.SearchInfo.mobile='';
        $scope.SearchInfo.department.name='';
        $scope.SearchInfo.position.name='';
        $scope.SearchInfo.codeSpecAreaName='';

    };

    //搜索所有账号
    $scope.btnSearch = function (){

        $http({
            method: "post",
            data: $scope.SearchInfo,
            url: "/account/getaccountbysearch"
        }).success(function (response) {

            if(response.result=="error")
            {
                alert(response.desc);
            }else {
                $scope.AccountView = response.data;
            }

        }).error(function(error){
            console.log(error);
        });

    };


    //初始化
    $scope.btnSearch();



}])