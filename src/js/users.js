
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


$('td span').each((v,k) => {
    if($(k).text() == 'Active'){
        $(k).addClass('Active');
    } else if($(k).text() == 'Banned'){
        $(k).addClass('Banned');
    } else if($(k).text() == 'Inactive'){
        $(k).addClass('inactive');
    }
});
