var dom = document.getElementById("graph");
var chart = echarts.init(dom);

chart.showLoading();


$.getJSON("src/json/login_server_distribution.json", function(json) {
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
            data: json.map(function (record) {
                return record.server;
            })
        },
        yAxis: {
            type: 'value',
            name: 'Records'
        },
        series: [
            {
                type: 'bar',
                name: 'Login server distribution',
                barWidth: '66.67%',
                label: {
                    show: 'true',
                    position: 'insideTop'
                },
                data: json.map(function (record) {
                    return record.count;
                })
            }
        ],
        itemStyle: {
            color: '#03A9F4'
        }
        
    }, true);
});
