window.updateTotals = function (totalCost, totalCount) {
    var totalCostFields = document.querySelectorAll('.total-price');
    var totalCountField = document.querySelector('.items-counter');

    totalCostFields.forEach(function (field) {
        field.textContent = String.fromCharCode(163) + totalCost;
    });

    totalCountField.textContent = '(' + totalCount + ')';
}