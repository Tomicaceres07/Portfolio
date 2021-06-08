let scrollY = window.pageYOffset;
window.onscroll = function(){
    let check = document.getElementById('check');

    if(check.checked && (scrollY >= 0)){
        $('.nav_list').hide();
        $('#check').prop('checked', false);
    }else{
        $('.nav_list').show();
    }
}

let check = document.getElementById('check');
$(check).on('change', function(){
    if (check) {
        $('.icon-menu').addClass('spin-open');
        $('.icon-menu').removeClass('spin-close');
    }
});

$(check).on('change', function(){
    if (check.checked == false) {
        $('.icon-menu').addClass('spin-close');
        $('.icon-menu').removeClass('spin-open');
    }
});

