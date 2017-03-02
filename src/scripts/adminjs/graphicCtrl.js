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