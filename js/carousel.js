'use strict';


    function Carousel() {
            var currentPosition = 0;
            
            var previousChecked = 0;
            var slides = document.querySelectorAll('.slide');
            var slidesContainer = document.querySelector('.slides-list');
            slidesContainer.style.width = 100 * slides.length + '%';
            var step = 100 / slides.length;
            var carouselControlsContainer = document.getElementById('carousel-controls-container');
            carouselControlsContainer.addEventListener('click', function(e) {
                if(e.target.classList.contains('carousel-control')) {
                    turnSlidesByClick(e.target.id);
                }
            });

            addCarouselButtons();
            launchCarousel();

        for(var i = 0; i < slides.length; i += 1) {
            slides[i].style.width = step + '%';
        }    
        
        function addCarouselButtons() {
            for (var i = 0; i < slides.length; i += 1) {
                var carouselButton = document.createElement('li');
                carouselButton.classList.add('carousel-control');
                carouselButton.setAttribute('id', 'carousel-btn-' + i)
                if (i === 0) {
                    carouselButton.classList.add('checked');
                }
                carouselControlsContainer.appendChild(carouselButton);
            }
        }

        function launchCarousel() {
            var limitPosition = (step * (slides.length - 1)) * (-1);
            setInterval(function() {
                if (currentPosition > limitPosition) {
                    currentPosition -= step;
                    turnSlide(currentPosition);
                    changeCheckedButton(previousChecked + 1);
                } else {
                    currentPosition = 0;
                    turnSlide(currentPosition);
                    changeCheckedButton(0);
                }

            }, 10000);
        }

        function turnSlide(nextPosition) {
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.left = nextPosition + "%";
            }
        }

        function changeCheckedButton(id) {
            var buttons = document.querySelectorAll('.carousel-control');

            for (var i = 0; i < buttons.length; i++) {
                if (buttons[i].classList.contains('checked')) {
                    buttons[i].classList.remove('checked');
                }
            }
            var currentChecked = document.querySelector('#carousel-btn-' + id);
            currentChecked.classList.add('checked');
            previousChecked = id;
        }

        function turnSlidesByClick(id) {
            var numberPattern = /\d+/g;
            var currentButtonNumber = parseInt(id.match(numberPattern));
            var nextPosition = currentPosition - step * (currentButtonNumber - previousChecked);
            turnSlide(nextPosition);
            changeCheckedButton(currentButtonNumber);
            currentPosition = nextPosition;
        }


    }

    var carousel = new Carousel();