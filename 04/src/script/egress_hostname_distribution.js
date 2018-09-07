var dom = document.getElementById("graph");
var chart = echarts.init(dom);

chart.showLoading();

$.getJSON("src/json/egress_hostname_distribution.json", function(json) {
    chart.hideLoading();

    chart.setOption(option = {
        title : {
            text: '3.3 Egress hostname distribution',
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
                        name: record.hostname,
                        value: record.count
                    };
                }),
            }
        ]
    }, true);
});
