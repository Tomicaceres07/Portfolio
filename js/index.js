let scroll = window.pageYOffset;
$(window).scroll(function(){
    let actual_scroll = window.pageYOffset;
    height = $("#home").height();
    half_height = height/2;
    if ($("#nav").offset().top > (half_height)) {
        $("#nav").addClass('background-rgba');
    }else{
        $("#nav").removeClass('background-rgba');
    }

    if (scroll >= actual_scroll) {
        document.getElementById('nav').style.top = '0';
    }else{
        document.getElementById('nav').style.top = '-100px';
    }
    scroll = actual_scroll;
});