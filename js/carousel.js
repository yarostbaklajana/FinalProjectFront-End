'use strict';
{

    class Carousel {
        constructor() {
            this.currentPosition = 0;
            this.step = 33.3;
            this.previousChecked = 1;
            this.slides = document.querySelectorAll('.slide');
            this.carouselControlsContainer = document.getElementById('carousel-controls-container');
        }

        addCarouselButtons() {

            this.slides.forEach( (item, index) =>  {
                let carouselButton = document.createElement('li');
                carouselButton.className = 'carousel-control';
                carouselButton.setAttribute('id', 'carousel-btn-' + index)
                if (index === 1) {
                    carouselButton.className = carouselButton.classList.add('checked');
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
                    this.changeCheckedButton(1);
                }

            }, 5000);
        }

        turnSlide(nextPosition) {
            for (let i = 0; i < this.slides.length; i++) {
                this.slides[i].style.left = nextPosition + "%";
            }
        }

        changeCheckedButton(id) {
            const buttons = document.querySelectorAll('.carousel-control');

            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].className.indexOf('checked') !== -1) {
                    buttons[i].className = buttons[i].className.replace(' checked', '');
                }
            }
            let currentChecked = document.querySelector('#carousel-btn-' + id);
            currentChecked.className = currentChecked.classList.add('checked');
            this.previousChecked = id;
        }
    }

    const carousel = new Carousel();
    carousel.addCarouselButtons();
    carousel.launchCarousel();

}