
$(function() {
    var $iosDialog = $('#iosDialog1');
    $("#back").on("click", function() {
        window.location.href = "./menu.html"
    });

    $('#ledger').on('click', function(){
        window.location.href = "./ledgerDetail.html"
    });
});