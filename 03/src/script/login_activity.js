var dom = document.getElementById("graph");
var chart = echarts.init(dom);

chart.showLoading();

$.getJSON("src/json/login_activity.json", function(json) {
    chart.hideLoading();

    chart.setOption(option = {
        title : {
            text: 'Login activity',
            x:'center'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: json.map(function (record) {
                return {
                    name: record.activity
                };
            })
        },
        series : [
            {
                type: 'pie',
                radius : '55%',
                center: ['50%', '40%'],
                data: json.map(function(record) {
                    return {
                        name: record.activity,
                        value: record.count,
                        itemStyle : {
                            color : record.color
                        }
                    };
                }),
                label: {
                    position: 'inside',
                    formatter: '{c}'
                },
                itemStyle : {
                    opacity : 0
                }
            },
            {
                name: 'Login activity',
                type: 'pie',
                radius : '55%',
                center: ['50%', '40%'],
                data: json.map(function (record) {
                    return {
                        name: record.activity,
                        value: record.count,
                        itemStyle : {
                            color : record.color
                        }
                    };
                }),
                label: {
                    normal: {
                        formatter: '{b}\n{d}%'
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.3)'
                    }
                }
            }

        ]
    }, true);
});
