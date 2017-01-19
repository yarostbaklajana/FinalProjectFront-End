window.updateTotals = function (totalCost, totalCount) {
    var totalCostFields = document.querySelectorAll('.total-price');
    var totalCountField = document.querySelector('.items-counter');

   
        for(var i = 0; i < totalCostFields.length; i += 1) {
            totalCostFields[i].textContent = String.fromCharCode(163) + totalCost;
        }
        
    

    totalCountField.textContent = '(' + totalCount + ')';
}