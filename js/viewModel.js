(function() {
    
    var addToBagButton = document.querySelector('.main-button');

    var viewModel = {

        setItemView: setItemView(getItem()),
        addItemToBag: addToBagButton.addEventListener('click', function() {
            var item = {};
            var bag = BAG_STORAGE.bagStats.bag || [];
            var totalCost = BAG_STORAGE.bagStats.totalCost || 0;
            var totalCount = BAG_STORAGE.bagStats.totalCount || 0;
            if(bag.indexOf(item) !== -1) {
                bag.splice(bag.indexOf(item), 1);
                item.quantity += 1;
            } 
            bag.push(item);
            updateState(bag, totalCost, totalCount);
            
        })
    }

    function getItem() {
        var params = window.location.hash;
        var item;
        if(params.indexOf('id=') !== -1) {
            var id = parseInt(params.substring(params.indexOf('id=') + 3));
            ITEMS.forEach(function(object) {
            if(object.id === id) {
                item = object;
            } 
            });
        
        }
        return item;
    }

    function setItemView(item) {
        if(item !== undefined) {
            document.querySelector('.full-item-picture').setAttribute('src', 'img/items/' + item.source);
            var thumbnails = document.querySelectorAll('.item-thumbnail');
            thumbnails.forEach(function(thumbnail, index) {
                if(item.thumbnails.length > index) {
                    thumbnail.setAttribute('src','img/items/' + item.thumbnails[index]);
                } else {
                    thumbnail.parentNode.removeChild(thumbnail);
                }
            });
            document.querySelector('.detailed-name').textContent = item.name;
            document.querySelector('.detailed-price').textContent = String.fromCharCode(163) + item.price;
        }
    }

    function updateState(bag, totalCost, totalCount) {
        BAG_STORAGE.bagStats = {
            bag: bag,
            totalCost: totalCost,
            totalCount: totalCount
            };
    }

    
})();