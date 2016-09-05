'use strict';

$(document).ready(function() {
    $('.remove-item-btn').mouseenter(function(e) {
        var itemFigure = $(e.target).parent().parent();
        itemFigure.toggleClass('targeted-delete');

        $('.targeted-delete .cover').toggleClass('target-delete-cover');
        $('.targeted-delete .cover').show();
        $('.targeted-delete .cover').animate({opacity: 1});
        $('.targeted-delete .poster').toggleClass('target-delete-filter');
    });

    $('.remove-item-btn').mouseleave(function(e) {

        $('.targeted-delete .cover').animate({opacity: 0}, 100);
        $('.targeted-delete .cover').toggleClass('target-delete-cover');

        $('.targeted-delete .poster').toggleClass('target-delete-filter');
        var itemFigure = $(e.target).parent().parent();
        $('.targeted-delete .cover').hide();
        itemFigure.toggleClass('targeted-delete');

    });
});