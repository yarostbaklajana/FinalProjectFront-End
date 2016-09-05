'use strict';

$(document).ready(function() {

    var carouselInterval;
    var currentPosition = 0;

    $('#carousel-controls-container').click(function(e) {
        clearTimeout(carouselInterval);

         if($(e.target).hasClass('control') && !$(e.target).hasClass('checked')) {
             var previousChecked = $('input.checked');
             var currentChecked = $(e.target);
             var currentId = parseInt(currentChecked.attr('id'));
             slideNeedCountOfTimes($('.slide'), currentId,  currentPosition,  100);

             previousChecked.removeClass('checked');
             currentChecked.addClass('checked');
         }
        launchCarousel();
    });



    function slideNeedCountOfTimes(sliderElements, current,  currentPosition, step) {

        if(currentPosition <= 200 && currentPosition >= -200) {
                currentPosition = -(current-1) * step;
                slideOn(currentPosition, sliderElements);
        }

    }

    function slideOn(position, element) {
        element.css('transform', 'translateX(' + position + '%)');
        currentPosition = position;
    }




    function launchCarousel() {
        carouselInterval = setInterval(function() {
            changeCheckedRadioButton();
            if(Math.abs(currentPosition) < 200) {
                currentPosition -= 100;
                slideOn(currentPosition, $('.slide'));

            } else {
                currentPosition = 0;
                slideOn(currentPosition, $('.slide'));
            }
        }, 9000);
    }

    function changeCheckedRadioButton() {
        var radioButtons = $('input[type="radio"]');
        var currentChecked = $('input[type="radio"].checked');
        currentChecked.removeClass('checked');
        var indexOfChecked = radioButtons.index(currentChecked);
        var nextChecked;
        var nextIndex = indexOfChecked + 1;
        if(indexOfChecked < radioButtons.length - 1) {
            nextChecked = radioButtons.get(nextIndex);
        } else {
            nextChecked = radioButtons.first();
        }

        $(nextChecked).addClass('checked');
    }

    launchCarousel();

});
