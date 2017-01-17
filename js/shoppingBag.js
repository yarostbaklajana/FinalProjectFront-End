(function(){
    shoppingBag = {
        setBagView: updateBagView()
    }

    

    function updateBagView(message) {
        var totalCostFields = document.querySelectorAll('.total-price');
        var itemsInBagContainer = document.querySelector('.items-in-bag');
        var totalCountField = document.querySelector('.items-counter');

        if(window.bagStorage.bag.length === 0) {
            itemsInBagContainer.appendChild(getMessage("Your shopping bag is empty. Use Catalog to add new items"));
            
        } else {
            window.bagStorage.bag.forEach(function(item) {
                itemsInBagContainer.appendChild(addItemView(item));
                
            });
        }

        updateTotals(window.bagStorage.totalCost, window.bagStorage.totalCount);
    }

    function addItemView(item) {
        var pattern = document.querySelector('.item-in-bag-pattern');

        var itemInBag = pattern.cloneNode(true);
        itemInBag.classList.remove('item-in-bag-pattern');
        itemInBag.querySelector('.item-in-bag-image').setAttribute('src', 'img/items/' +item.source);
        itemInBag.querySelector('.name').textContent = item.name;
        itemInBag.querySelector('.color').textContent = 'Color: ' + item.color;
        itemInBag.querySelector('.size').textContent = 'Size: ' + item.size;
        itemInBag.querySelector('.quantity').textContent = 'Quantity: ' + item.quantity;
        itemInBag.querySelector('.removing-item-button').setAttribute('id', item.id);
        return itemInBag;
    }

   

    function getMessage(message) {
        var messageField = document.createElement('h1');
            messageField.classList.add('shopping-bag-message');
            messageField.textContent = message;
            
            return messageField;
    }

    function updateTotals(totalCost, totalCount) {
        var totalCostFields = document.querySelectorAll('.total-price');
        var totalCountField = document.querySelector('.items-counter');

        totalCostFields.forEach(function(field) {
            field.textContent = String.fromCharCode(163) + totalCost;
        });

        totalCountField.textContent = '(' + totalCount + ')';
    }

})();