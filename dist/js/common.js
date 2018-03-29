//侧边栏点击事件
$('.two').click(function(){
    $(this).next().slideToggle();
    $(this).parent().siblings().find('.two_none').slideUp();
});