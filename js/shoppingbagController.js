'use strict';
var totalPriceField = document.querySelectorAll('.total-price');
 var  totalCountField = document.querySelector('.items-counter');
var buttonsContainer = document.querySelector('.main-button-container');
var itemsContainer = document.querySelector('.items-in-bag');
var message = document.createElement('h1');
message.classList.add('message');

buttonsContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('main-button')) {
        itemsContainer.innerHTML = '';
        addMessageConsideringBuying();
        updateTotals();
    } 

    if(e.target.classList.contains('clear-bag-button')) {
        itemsContainer.innerHTML = '';
        addMessageConsideringClear();
        updateTotals();
    }
});

function addMessageConsideringBuying() {
    message.textContent = 'Thank you for your purchase';
    itemsContainer.appendChild(message);
}

function addMessageConsideringClear() {
    message.textContent = 'Your shopping bag is empty. Use Catalog to add new items';
    itemsContainer.appendChild(message);
}

function updateTotals() {
    for(var i = 0; i < totalPriceField.length; i += 1) {
        totalPriceField[i].textContent = 0;
    }
    
    totalCountField.textContent = '';
}

