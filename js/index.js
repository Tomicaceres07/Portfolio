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