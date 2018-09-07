var dom = document.getElementById("graph");
var chart = echarts.init(dom);

chart.showLoading();

$.getJSON("src/json/topmost_user.json", function(json) {
    chart.hideLoading();

    chart.setOption(option = {
        parallelAxis: [
            {
                dim: 0, 
                name: 'time',
                type: 'category',
                data: Array.from(new Set(json.map(function(record) {
                    return record.time;
                })))
            },
            {
                dim: 1, 
                name: 'username',
                type: 'category',
                data: Array.from(new Set(json.map(function(record) {
                    return record.username;
                })))
            },
            {
                dim: 2, 
                name: 'ip_src',
                type: 'category',
                data: Array.from(new Set(json.map(function(record) {
                    return record.ip_src;
                })))
            },
            {
                dim: 3, 
                name: 'ip_dst',
                type: 'category',
                data: Array.from(new Set(json.map(function(record) {
                    return record.ip_dst;
                })))
            },
            {
                dim: 4, 
                name: 'port_dst',
                type: 'category',
                data: Array.from(new Set(json.map(function(record) {
                    return record.port_dst;
                })))
            },
            {
                dim: 5, 
                name: 'hostname',
                type: 'category',
                data: Array.from(new Set( json.map(function(record) {
                    return record.hostname;
                }))),
            }
        ],
        series: [
            {
                type: 'parallel',
                lineStyle: {
                    width: 4
                },
                data: json.map(function(record) {
                    return [
                        record.time,
                        record.username,
                        record.ip_src,
                        record.ip_dst,
                        record.port_dst,
                        record.hostname,
                    ];
                })
            }
        ]
    }, true);
});
