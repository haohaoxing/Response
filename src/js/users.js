
$('.btnA').each((v,k) => {
    $(k).click(function(){
        $('.widget_body').eq(v).slideToggle();
    });
});

$('tbody').click(function(e){
    var $clicked = $(e.target);
    $clicked.next().toggle();
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
