//点击效果
$('.add').click(function(){
    // console.log( $(this).parent().parent());
    $(this).parent().parent().next().slideToggle();
});