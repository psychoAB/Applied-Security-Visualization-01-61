var dom = document.getElementById("graph");
var chart = echarts.init(dom);
var colors = ['#FFA726', '#FB8C00', '#EF6C00'];

chart.showLoading();

$.getJSON("src/json/ip_usage_ratio.json", function(json) {
    chart.hideLoading();

    chart.setOption(option = {
        title: {
            text: 'IP usage ratio',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: json.map(function(record) {
                return {
                    name: record.Protocol
                };
            })
        },
        series: [
            {
                name: 'IP usage ratio',
                type: 'pie',
                radius : '55%',
                center: ['50%', '40%'],
                data: (json.map(function(record) {
                    return {
                        name: record.Protocol,
                        value: record.Count
                    };
                })).map(function(item) {
                    return {
                        name : item.name,
                        value : item.value,
                        itemStyle : {
                            color : colors.pop()
                        }
                    };
                }),
                label: {
                    normal: {
                        formatter: '{b}\n{d}%'
                    }
                }
            }
        ]
    }, true);
});
