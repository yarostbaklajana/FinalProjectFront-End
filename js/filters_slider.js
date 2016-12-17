'use strict';


    function FiltersSlider() {
            var filtersContainer = document.querySelector('.dropdown-filters');
            filtersContainer.addEventListener('click', function(e) {
                if(e.target.classList.contains('filter-value')) {
                    if(!e.target.classList.contains('unselected-filter-value'))  {
                        hightlightValue(e.target);
                    }
                    shiftValueOnStart(e.target);
                }
            });

        function hightlightValue(selectedValue) {
            var allValues = selectedValue.parentNode.children;

            for(var i = 0; i < allValues.length; i += 1) {
                allValues[i].classList.remove('selected-filter-value');
            }
            selectedValue.classList.add('selected-filter-value');
        }

        function shiftValueOnStart(selectedValue) {
            var parent = selectedValue.parentNode;
            var allValues = parent.children;
            var currentPosition = "-" + selectedValue.offsetLeft + "px";
            var arrOfPrev = [];

            parent.style.left = currentPosition;

            for(var i = 0; i < allValues.length; i += 1) {
                if(allValues[i].classList.contains('selected-filter-value')) {
                    return;
                }
                arrOfPrev.push(allValues[i]);
                
            }

            for(var i = 0; i < arrOfPrev.left; i += 1) {
                parent.appendChild(arrOfPrev[i]);
            }
            
        }

    }

    var filtersSlider = new FiltersSlider();



