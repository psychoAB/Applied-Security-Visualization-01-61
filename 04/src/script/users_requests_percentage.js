var dom = document.getElementById("graph");
var chart = echarts.init(dom);

chart.showLoading();

$.getJSON("src/json/users_requests_percentage.json", function(json) {
    chart.hideLoading();

    chart.setOption(option = {
        title : {
            text: '3.1.2 Requests per minute',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{b}<br/>Requests : {c}"
        },
        series: [
            {
                type: 'treemap',
                data: json.map(function (record) {
                    return {
                        name: record.user,
                        value: record.count
                    };
                }),
            }
        ]
    }, true);
});
