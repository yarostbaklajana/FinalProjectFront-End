var filterOpeningButton = document.querySelector('.showing-filters-button');

filterOpeningButton.addEventListener('click', function() {
    toggleDropdownFilters();
});

function toggleDropdownFilters() {
    var dropdownFilters = document.querySelector('.dropdown-filters');
    if(!dropdownFilters.classList.contains('hidden-filters')) {
        dropdownFilters.classList.add('hidden-filters');
    } else {
        dropdownFilters.classList.remove('hidden-filters');
    }
}