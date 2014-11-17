

$(document).ready(function () {

    var shown = false;
$(window).scroll(function () {
    if ($(window).scrollTop() == 0) {
        $('.menu').hide();
        $('.msg').fadeIn(500);
        $('.welcome').animate({
            height: "220px"
        }, 300);
        shown = false;
    } else if ($(window).scrollTop() > 0 && !shown) {
        $('.menu').fadeIn(500);
        $('.msg').hide();
        $('.welcome').animate({
            height: "80px"
        }, 300);
        shown = true;
    }
});

    
});