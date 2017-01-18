(function(){
   updateBagView("Your shopping bag is empty. Use Catalog to add new items");


    var itemsContainer = document.querySelector('.items-in-bag');

    if(itemsContainer) {
         itemsContainer.addEventListener('click', function(e) {
        if(e.target.classList.contains('removing-item-button')) {
             var index = parseInt(e.target.dataset.itemId);
            window.bagStorage.removeItem(index);
            updateBagView("Your shopping bag is empty. Use Catalog to add new items");
        }
    });
    }

    var clearBagButton = document.querySelector('#clear-bag-button');
if(clearBagButton) {
    clearBagButton.addEventListener('click', function(e) {
        window.bagStorage.clearBag();
        updateBagView("Your shopping bag is empty. Use Catalog to add new items");
    });
}

var buyItemsButton = document.querySelector('#buy-items-button');
if(buyItemsButton) {
    buyItemsButton.addEventListener('click', function(e) {
        window.bagStorage.clearBag();
        updateBagView("Thank you for your purchase");
    });
}


    function updateBagView(message) {
        var itemsInBagContainer = document.querySelector('.items-in-bag');
        itemsInBagContainer.innerHTML = "";
        if(window.bagStorage.bag.length === 0) {
            itemsInBagContainer.appendChild(getMessage(message));
            
        } else {
            window.bagStorage.bag.forEach(function(item) {
                itemsInBagContainer.appendChild(addItemView(item));
                
            });
        }

        window.updateTotals(window.bagStorage.totalCost, window.bagStorage.totalCount);
        
    }

    function addItemView(item) {
        var pattern = document.querySelector('.item-in-bag-pattern');

        var itemInBag = pattern.cloneNode(true);
        itemInBag.classList.remove('item-in-bag-pattern');
        itemInBag.querySelector('.item-in-bag-image').setAttribute('src', 'img/items/' +item.source);
        itemInBag.querySelector('.price').textContent = String.fromCharCode(163) + item.price;
        itemInBag.querySelector('.name').textContent = item.name;
        itemInBag.querySelector('.color').textContent = 'Color: ' + item.color;
        itemInBag.querySelector('.size').textContent = 'Size: ' + item.size;
        itemInBag.querySelector('.quantity').textContent = 'Quantity: ' + item.quantity;
        itemInBag.querySelector('.removing-item-button').dataset.itemId = item.id;
        return itemInBag;
    }

   

    function getMessage(message) {
        var messageField = document.createElement('h1');
            messageField.classList.add('shopping-bag-message');
            messageField.textContent = message;
            
            return messageField;
    }

    

})();