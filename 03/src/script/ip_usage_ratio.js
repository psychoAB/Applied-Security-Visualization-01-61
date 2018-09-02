var dom = document.getElementById("graph");
var chart = echarts.init(dom);

chart.showLoading();

$.getJSON("src/json/ip_usage_ratio.json", function(json) {
    chart.hideLoading();

    chart.setOption(option = {
        title: {
            text: 'IP usage ratio',
            x: 'center'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: json.map(function(record) {
                return {
                    name: record.protocol
                };
            })
        },
        series: [
            {
                name: 'IP usage ratio',
                type: 'pie',
                radius : '55%',
                center: ['50%', '40%'],
                data: json.map(function(record) {
                    return {
                        name: record.protocol,
                        value: record.count,
                        itemStyle : {
                            color : record.color
                        }
                    };
                }),
                label: {
                    formatter: '{b}\n{d}%'
                }
            },
            {
                type: 'pie',
                radius : '55%',
                center: ['50%', '40%'],
                data: json.map(function(record) {
                    return {
                        name: record.protocol,
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
            }
        ]
    }, true);
});
