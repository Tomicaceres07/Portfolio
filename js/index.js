$(document).ready(function(){

    let scroll = window.pageYOffset;

    $('.technology').tooltip();

    $(window).scroll(function(){
        let actual_scroll = window.pageYOffset;
        jq_home_height = $("#home").height();
        half_height = jq_home_height/2;
        nav = $("#nav");
        if (nav.offset().top > (half_height)) {
            nav.addClass('background-rgba');
        }else{
            nav.removeClass('background-rgba');
        }
        aria_expanded = document.getElementById('toggle').getAttribute('aria-expanded');
        if (scroll >= actual_scroll) {
            document.getElementById('nav').style.top = '0';
            if(aria_expanded == 'true'){
                $('#menu').slideDown();
            }
        }else{
            document.getElementById('nav').style.top = '-100px';
            $('#menu').slideUp();
            // $("#toggle").attr("aria-expanded","false");
        }
        scroll = actual_scroll;

        let window_height = window.innerHeight;

        let home = document.getElementById('home');
        let about = document.getElementById('about');
        let portfolio = document.getElementById('portfolio');
        let contact = document.getElementById('contact');

        let home_height = home.getBoundingClientRect().bottom;
        let about_height = about.getBoundingClientRect().top;
        let portfolio_height = portfolio.getBoundingClientRect().top;
        let contact_height = contact.getBoundingClientRect().bottom;

        console.log(home_height);
        if(home_height >= 110){
            $('#li_home').addClass('active').siblings().removeClass('active');
        }
        if (about_height <= 0) {
            $('#li_about').addClass('active').siblings().removeClass('active');
            if ($('#li_about').hasClass('active')) {
                // console.log("TENGO LA CLASE ACTIVE")
            }
        }
        if (portfolio_height <= 0) {
            $('#li_portfolio').addClass('active').siblings().removeClass('active');
            if ($('#li_portfolio').hasClass('active')) {
                // console.log("TENGO LA CLASE ACTIVE")
            }
        }
        if (contact_height <= window_height) {
            $('#li_contact').addClass('active').siblings().removeClass('active');
        }

    });


    $('#up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    $('#logo').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

});





/* $('#toggle').click(function(){
    $('#menu').toggle();
    aria_expanded = document.getElementById('toggle').getAttribute('aria-expanded');
    if(aria_expanded == 'true'){
        console.log('aria-expanded es TRUE')
        $('#menu').slideUp();
        // $("#toggle").attr("aria-expanded","false");
        // console.log($("#toggle").attr("aria-expanded","false"));
    }else if(aria_expanded == 'false'){
        $('#menu').slideDown();
    }
    console.log(aria_expanded);
}); */



