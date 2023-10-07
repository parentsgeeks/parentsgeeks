$(document).ready(function() {
    $(".content-barre").animate({
        width: 500
    }, 625000, 'linear', function() {
        $(".titre").html('démarrage du stream');
    });
});