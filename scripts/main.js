
var sideMenu = document.getElementById('menu_left');
var sideMenuHandle = document.getElementById('menu_left_handle');
var sideMenuButton = document.getElementById('menu_left_button');
var searchIcon = document.querySelector('header .search-form form a');
var searchInput = document.querySelector('header .search-form form input[type=text]');

sideMenuHandle.addEventListener('click', toogleOpen);
searchIcon.addEventListener('click', openSearchInput);

function toogleOpen() {
    sideMenu.classList.toggle('hidden');
   // sideMenu.style.left = sideMenu.style.left == '0px' ? '-185px' : '0px';
    sideMenuButton.style.transform = sideMenuButton.style.transform == 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
}

function openSearchInput() {
    searchInput.classList.toggle('form--invisible');
} 

$('.truncate_me').each(function () {
    var $el = $(this).get(0);
    $clamp($el , {clamp: 3});
   });

$(document).on('click', 'a[href^="#"]', function (event) {
event.preventDefault();

$('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
}, 500);
});


