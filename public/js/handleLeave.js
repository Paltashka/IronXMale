$("html").bind("mouseleave", function () {
    $( function() {
        // $('#dialog').load("exit-checkout.html");
        // $( "#dialog" ).dialog()
    } );
});

$(window).on('beforeunload', function(){
    return 'Are you sure you want to leave?';
});

