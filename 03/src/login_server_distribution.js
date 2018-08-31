var dom = document.getElementById("graph");
var chart = echarts.init(dom);

chart.showLoading();


$.getJSON("src/login_server_distribution.json", function(json) {
    chart.hideLoading();

    chart.setOption(option = {
        title : {
            text: 'Login server distribution',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}"
        },
        xAxis: {
            type: 'category',
            name: 'Server address',
            data: json.map(function (element) {
                return element.Server;
            })
        },
        yAxis: {
            type: 'value',
            name: 'Records'
        },
        series : [
            {
                type: 'bar',
                name: 'Login server distribution',
                data: json.map(function (element) {
                    return element.Count;
                })
            }
        ]
    }, true);
});
