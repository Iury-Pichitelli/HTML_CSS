var btn_menu = document.querySelector('.btn_menu')
var menu_hidden = document.querySelector('.menu_lateral')
var html = document.querySelector('html')

btn_menu.addEventListener('click', function() {
    if(menu_hidden.style.width === '0px'){
        menu_hidden.style.width = '250px';
    }
    else{
        menu_hidden.style.width = '0px';
    }

});
