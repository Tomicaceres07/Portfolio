$(document).ready(function(){

    let scroll = window.pageYOffset;

    $('.technology').tooltip();

    $(window).scroll(function(){
        let actual_scroll = window.pageYOffset;
        jq_home_height = $("#home").height();
        half_height = jq_home_height/2;
        nav = $("#nav");

        aria_expanded = document.getElementById('toggle').getAttribute('aria-expanded');

        scroll = actual_scroll;

        let window_height = window.innerHeight;
        let window_one_third = window.innerHeight / 1.3;


        let home = document.getElementById('home');
        let about = document.getElementById('about');
        let portfolio = document.getElementById('portfolio');
        let contact = document.getElementById('contact');

        let home_height = home.getBoundingClientRect().bottom;
        let about_height = about.getBoundingClientRect().top;
        let portfolio_height = portfolio.getBoundingClientRect().top;
        let contact_height = contact.getBoundingClientRect().bottom;
        let contact_height_top = contact.getBoundingClientRect().top;

        // HOME
        if(home_height >= 110){
            $('#li_home').addClass('active').siblings().removeClass('active');
        }

        // ABOUT
        if (about_height <= 0) {
            $('#li_about').addClass('active').siblings().removeClass('active');
        }
        if (window_one_third >= about_height) {
            $('#row-about').addClass('animate__animated animate__fadeInDown');
        }

        // PORTFOLIO
        if (portfolio_height <= 0) {
            $('#li_portfolio').addClass('active').siblings().removeClass('active');
        }
        if (window_one_third >= portfolio_height) {
            $('.row-portfolio').addClass('animate__animated animate__fadeIn');
        }

        // CONTACT
        if (contact_height <= window_height) {
            $('#li_contact').addClass('active').siblings().removeClass('active');
        }
        // console.log('woh '+window_one_third);
        // console.log('ch '+contact_height);
        if (window_one_third >= contact_height_top) {
            $('.row-contact').addClass('animate__animated animate__fadeInUp');
        }

    });


    $('#up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });


    $('#down').on('click', function(){
        $('html, body').animate({
            scrollTop: about_height
        }, 500);
    });

    $('#logo').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });


    // Toggle Language
    $('.check').change(function() {
        if (this.checked) {
            $('.check').prop('checked', true);
            document.getElementById('contentEnglish').classList.add('hide-content')
            document.getElementById('contentEnglish').classList.remove('show-content')
            
            document.getElementById('contentSpanish').classList.add('show-content')
            document.getElementById('contentSpanish').classList.remove('hide-content')
        } else {
            $('.check').prop('checked', false);
            document.getElementById('contentEnglish').classList.add('show-content')
            document.getElementById('contentEnglish').classList.remove('hide-content')

            document.getElementById('contentSpanish').classList.add('hide-content')
            document.getElementById('contentSpanish').classList.remove('show-content')
        }
    });
});