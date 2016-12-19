var buttonsContainer = document.querySelector('.item-detailed-description-container');
buttonsContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('property-button')) {
        changeHighligtedButton(e.target);
    }
});

function changeHighligtedButton(target) {
    var buttons = target.parentNode.querySelectorAll('.property-button');
    for(var i = 0; i < buttons.length; i+= 1) {
        buttons[i].classList.remove('highligted-property-button');
    }

    target.classList.add('highligted-property-button');
}