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
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: json.map(function (element) {
                return {
                    name: element.Activity
                };
            })
        },
        series : [
            {
                name: 'Login activity',
                type: 'pie',
                radius : '55%',
                center: ['50%', '40%'],
                data: json.map(function (element) {
                    return {
                        name: element.Activity,
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
