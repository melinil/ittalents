$(document).ready(function () {

    $(document).scroll(function () {
        if ($(window).scrollTop() !== 0) {
            $("#header").css('background-color', 'white');
        } else {
            $("#header").css('background-color', 'blue');
        }
    });
});