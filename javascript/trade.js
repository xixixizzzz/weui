
$(function() {
    var $iosDialog = $('#iosDialog1');
    $("#back").on("click", function() {
        window.location.href = "./menu.html"
    });

    $('#trade').on('click', function(){
        $iosDialog.fadeIn(200);
    });

    $('#cancel').on('click',function() {
        $iosDialog.fadeOut(200);
    });

    $('#next').on('click',function() {
        $iosDialog.fadeOut(200);
        var $loadingToast = $('#loadingToast');
        if ($loadingToast.css('display') != 'none') return;

        $loadingToast.fadeIn(100);
        setTimeout(function () {
            $loadingToast.fadeOut(100);
        }, 2000);
    });
});