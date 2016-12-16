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
            selectedValue.classList.add('selected-filter-value');
        }

        function shiftValueOnStart(selectedValue) {
            
        }

    }

    var filtersSlider = new FiltersSlider();



