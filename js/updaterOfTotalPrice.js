
var addToBagButton = document.querySelector('.main-button');
var totalPriceField ;
var totalCountField;

addToBagButton.addEventListener('click', updateValues);

function updateValues() {
    var regex = /[+-]?\d+(\.\d+)?/g;
    totalPriceField = document.querySelector('.total-price');
    totalCountField = document.querySelector('.items-counter');
    var totalPrice = parseFloat(totalPriceField.textContent.match(regex));
    var totalCount = parseInt(totalCountField.textContent.match(regex));
    var resultCount = totalCount + 1;
    var resultPrice = totalPrice + 180;
    totalCountField.textContent = "(" + resultCount + ")";
    totalPriceField.textContent = String.fromCharCode(163) + resultPrice;
}