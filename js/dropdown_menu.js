'use strict';

$(document).ready(function() {

    $('#dropdown-button').click(function() {
        $(this).hide();
        $('#dropdown-menu').show();
        $('#close-dropdown').show();
    });

    $('#close-dropdown').click(function() {
        $(this).hide();
        $('#dropdown-menu').hide();
        $('#dropdown-button').show();
    });

});