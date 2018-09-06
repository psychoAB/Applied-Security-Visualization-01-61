var dom = document.getElementById("graph");
var chart = echarts.init(dom);

chart.showLoading();


$.getJSON("src/json/requests_per_minute.json", function(json) {
    chart.hideLoading();

    chart.setOption(option = {
        title : {
            text: '3.1.1 Requests per minute',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}"
        },
        xAxis: {
            type: 'category',
            name: 'Time',
            data: json.map(function (record) {
                return record.time;
            })
        },
        yAxis: {
            type: 'value',
            name: 'Requests'
        },
        series: [
            {
                type: 'bar',
                name: 'Requests per minute',
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
