'use strict';
{

    class Carousel {
        constructor() {
            this.currentPosition = 0;
            this.step = 33.3;
            this.previousChecked = 0;
            this.slides = document.querySelectorAll('.slide');
            this.carouselControlsContainer = document.getElementById('carousel-controls-container');
            this.carouselControlsContainer.addEventListener('click', (e) => {
                if(e.target.classList.contains('carousel-control')) {
                    this.turnSlidesByClick(e.target.id);
                }
            });
        }

        addCarouselButtons() {

            this.slides.forEach( (item, index) =>  {
                let carouselButton = document.createElement('li');
                carouselButton.classList.add('carousel-control');
                carouselButton.setAttribute('id', 'carousel-btn-' + index)
                if (index === 0) {
                    carouselButton.classList.add('checked');
                }
                this.carouselControlsContainer.appendChild(carouselButton);
            });
            
            
        }

        launchCarousel() {
            setInterval(() => {
                if (this.currentPosition > (-this.step * (this.slides.length - 1))) {
                    this.currentPosition -= this.step;
                    this.turnSlide(this.currentPosition);
                    this.changeCheckedButton(this.previousChecked + 1);
                } else {
                    this.currentPosition = 0;
                    this.turnSlide(this.currentPosition);
                    this.changeCheckedButton(0);
                }

            }, 10000);
        }

        turnSlide(nextPosition) {
            for (let i = 0; i < this.slides.length; i++) {
                this.slides[i].style.left = nextPosition + "%";
            }
        }

        changeCheckedButton(id) {
            const buttons = document.querySelectorAll('.carousel-control');

            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].classList.contains('checked')) {
                    buttons[i].classList.remove('checked');
                }
            }
            let currentChecked = document.querySelector('#carousel-btn-' + id);
            currentChecked.classList.add('checked');
            this.previousChecked = id;
        }

        turnSlidesByClick(id) {
            var numberPattern = /\d+/g;
            var currentButtonNumber = parseInt(id.match(numberPattern));
            var nextPosition = this.currentPosition - this.step * (currentButtonNumber - this.previousChecked);
            this.turnSlide(nextPosition);
            this.changeCheckedButton(currentButtonNumber);
            this.currentPosition = nextPosition;
        }


    }

    const carousel = new Carousel();
    carousel.addCarouselButtons();
    carousel.launchCarousel();

}