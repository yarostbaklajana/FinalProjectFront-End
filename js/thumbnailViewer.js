'use strict';

$(document).ready(function() {


    $('.thumbnail').click(function(e) {
        toggleImage($('#item-image'), $(e.target));
        highlight( $(e.target));
    });



    function toggleImage(current, next) {
        current.attr('src', next.attr('src'));
    }

    function highlight(current) {
        let previous = $('.chosen-thumbnail');
        previous.removeClass('chosen-thumbnail');
        current.addClass('chosen-thumbnail');
    }
});