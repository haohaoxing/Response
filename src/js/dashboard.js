
//侧边栏点击事件
$('.two').click(function(){
    $(this).next().slideToggle();
    $(this).parent().siblings().find('.two_none').slideUp();
});
$('.cKsidebar').click(function(){
    console.log($('.sidebar').css('left'));
    if($('.sidebar').css('left')=="0px"){
        $('.sidebar').stop(true).animate({left:"-250px"},500);
    }else{
        $('.sidebar').stop(true).animate({left:0},500)
    }
});

function chart_pie ({num,inside,outside,ratio,gap}){
    var myChart = $('.div_chart .chart_pie')[num];

        // 基于准备好的dom，初始化echarts实例
        let chart_pie = echarts.init(myChart);

        // 指定图表的配置项和数据
        let option = {

            legend: {
                orient: 'vertical',
                x: 'left',
            },
            series: [
                {
                    type:'pie',
                    radius: [inside, outside],
                    avoidLabelOverlap: true,
                    hoverAnimation:false,
                    stillShowZeroSum:false,
                    legendHoverLink:false,
                    labelLine:{
                        show:false
                    },
                    itemStyle:{
                        color:'#eeeeee'
                    },
                    data:[
                        {
                            value:ratio,
                            itemStyle:{
                                color:'#87ceeb'
                            }
                        },
                        {
                            value:gap,
                            emphasis:{
                                itemStyle:{
                                    color:'#eeeeee'
                                }
                            }
                        }
                    ]
                }
            ]
        };
// 使用刚指定的配置项和数据显示图表。
    chart_pie.setOption(option);
}
chart_pie({num:0,inside:'85%',outside:'100%',ratio:85,gap:15});
chart_pie({num:1,inside:'85%',outside:'100%',ratio:13,gap:87});
chart_pie({num:2,inside:'85%',outside:'100%',ratio:15,gap:85});
chart_pie({num:3,inside:'85%',outside:'100%',ratio:55,gap:45});
chart_pie({num:4,inside:'85%',outside:'100%',ratio:35,gap:65});
chart_pie({num:5,inside:'85%',outside:'100%',ratio:97,gap:3});
chart_pie({num:6,inside:'70%',outside:'95%',ratio:88,gap:12});
chart_pie({num:7,inside:'70%',outside:'95%',ratio:63,gap:37});
chart_pie({num:8,inside:'70%',outside:'95%',ratio:28,gap:72});
chart_pie({num:9,inside:'70%',outside:'95%',ratio:11,gap:89});

var broLine =function () {
    for (let i = 0;i < 7;i++){
        let Chart = echarts.init($('.small_line')[i]);
        let  option = {
            xAxis: {
                show:false,
                type: 'category',
                boundaryGap: false
            },
            yAxis: {
                show:false,
                type: 'value',
                nameGap:0,
                minInterval:2,
                // splitNumber:20,
                min:0,
                max:15
            },
            series: [{
                data: [4,6, 9, 6, 7, 6],
                type: 'line',
                areaStyle: {}
            }]
        };
        Chart.setOption(option);
    }
};

broLine();
function columnar ({num,dObj,type}){
    let zhe_line = echarts.init(dObj);
    let  zhe_line_option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            splitLine:{
                interval:10,
            },
            data: ['2012-01', '2012-02', '2012-03', '2012-04']
        },
        yAxis: {
            type: 'value',
            max:584,
            minInterval:146
        },
        series: [{
            data: [120, 160, 140,[ 210, 260, 230],[ 340,450,373],[584]],
            type: type,
            barWidth:10,
            barCategoryGap:8,
            silent:true,
            areaStyle: {
                color: '#9ad4ec',
            },
            lineStyle:{
                color: '#42c1f7'
            },
            itemStyle:{
                color: '#42c1f7'
            }
        }]
    };
    zhe_line.setOption(zhe_line_option);
}

columnar({dObj:$('.sec02_r_con')[0],type:'line'});
columnar({dObj:$('.sec06_l_con')[0],type:'bar'});

// console.log($('.click_obj'));
$(function () {
    var clickObj = $('.click_obj .tit_r');
    clickObj.click(function () {
        $(this).parent().next('.packUp_obj').stop().slideToggle();
    })
})
// var Height = 0;
// var Width = 0;
// $(window).resize(function(){
//      Height = $(window).height();
//      Width = $(window).width();
//     $('.container') .width((Width - $('.sidebar').width())/Width * 100 + '%');
// })