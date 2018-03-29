// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('chart_pie'));

// 指定图表的配置项和数据
var option = {

    legend: {
        orient: 'vertical',
        x: 'left',
    },
    series: [
        {
            type:'pie',
            radius: ['65%', '80%'],
            avoidLabelOverlap: true,
            hoverAnimation:false,

            data:[
                {value:1500},
                {value:310}
            ]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

$(function () {
    $('.small_line').highcharts({
        chart: {
            type: 'area'
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            title: {
                text: '核武库国家'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} 制造 <b>{point.y:,.0f}</b>枚弹头'
        },
        plotOptions: {
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: '美国',
            data: [ 6, 11, 32, 110, 235, 369, 640,1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,]
        }]
    });
});