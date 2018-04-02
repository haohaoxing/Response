
$('.btnA').each((v,k) => {
    $(k).click(function(){
        $('.widget_body').eq(v).slideToggle();
    });
});

$('.btn-group').each((v,k) => {
    $(k).click(function(){
        $('.btn-group ul').eq(v).toggle();
    });
});
