$(function() {

    $('input[type="checkbox"]').iCheck();

    $('select').select2();


    $(".order-link").click(function(e){
        e.preventDefault();
        $("#order-modal").modal({
            opacity: 100
        });
    });

});
