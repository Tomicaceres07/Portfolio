$(window).scroll(function(){
    height = $("#home").height();
    half_height = height/2;
    if ($("#nav").offset().top > (half_height)) {
        $("#nav").addClass('background-rgba');
    }else{
        $("#nav").removeClass('background-rgba');
    }
});