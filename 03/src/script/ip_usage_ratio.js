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
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: json.map(function(element) {
                return {
                    name: element.Protocol
                };
            })
        },
        series: [
            {
                name: 'IP usage ratio',
                type: 'pie',
                radius : '55%',
                center: ['50%', '40%'],
                data: json.map(function(element) {
                    return {
                        name: element.Protocol,
                        value: element.Count
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
