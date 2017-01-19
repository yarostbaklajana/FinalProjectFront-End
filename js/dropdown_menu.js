'use strict';

var dropdownMenuButton = document.querySelector('#dropdown-button');
var closeMenuButton = document.querySelector('#close-dropdown');
var container = document.querySelector('.container');

dropdownMenuButton.addEventListener('click', function() {
    toggleDropdownMenu();
});

closeMenuButton.addEventListener('click', function() {
    toggleDropdownMenu();
});

function toggleDropdownMenu() {
    var dropdownMenu = document.querySelector('#dropdown-menu');
        dropdownMenu.classList.toggle('hidden-menu');
        container.classList.toggle('fixed-container');
        dropdownMenuButton.classList.toggle('hidden-button');
        closeMenuButton.classList.toggle('hidden-button');
}