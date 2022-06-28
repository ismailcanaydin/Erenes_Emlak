$(document).ready(function () {
    $(".nav-link").css("color", "white")
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 550) {
            //$("#nav").css("background", "gainsboro");
            $("#nav").css("background", "#F1EEE9");
            $(".nav-link").css("color", "black");
            $('#nav').addClass('shadow')
            //$('#nav').addClass('bg-light')
        }
        else {
            $("#nav").css("background", "transparent");
            $(".nav-link").css("color", "white");
            $('#nav').removeClass('shadow')
            //$('#nav').removeClass('bg-light')
        }
    })
});