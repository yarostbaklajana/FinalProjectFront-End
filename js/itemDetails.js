(function () {
    setItemView(getItem());

    function getItem() {
        var params = window.location.hash;
        if (params.indexOf('id=') !== -1) {
            var id = parseInt(params.substring(params.indexOf('id=') + 3));
            for (var i = 0; i < ITEMS.length; i++) {
                if (ITEMS[i].id === id) {
                    setProperties(ITEMS[i]);
                    return ITEMS[i];
                }
            }
        }
    }

    function setProperties(item) {
        var properties = document.querySelectorAll('.highligted-property-button');
        for(var i = 0; i < properties.length; i += 1) {
            if (properties[i].classList.contains('size-property')) {
                item.size = properties[i].value;
            }

            if (properties[i].classList.contains('color-property')) {
                item.color = properties[i].value;
            }
        }
    }

    function setItemView(item) {
        if (item !== undefined) {

            document.querySelector('.full-item-picture').setAttribute('src', 'img/items/' + item.source);
            var thumbnails = document.querySelectorAll('.item-thumbnail');
            for(var i = 0; i < thumbnails.length; i += 1) {
                if (item.thumbnails.length > i) {
                    thumbnails[i].setAttribute('src', 'img/items/' + item.thumbnails[i]);
                } else {
                    thumbnails[i].parentNode.removeChild(thumbnails[i]);
                }
            }
            document.querySelector('.detailed-name').textContent = item.name;
            document.querySelector('.detailed-price').textContent = String.fromCharCode(163) + item.price;
        } else {
            var itemDetails = document.querySelector('.item-details');
            var notFoundMessage = document.createElement('h1');
            notFoundMessage.textContent = "Item Not Found";
            notFoundMessage.classList.add('not-found-message');
            itemDetails.innerHTML = '';
            itemDetails.appendChild(notFoundMessage);
        }

        window.updateTotals(window.bagStorage.totalCost, window.bagStorage.totalCount);
    }

    var imagesBar = document.querySelector('.item-images-bar');
    var fullImage = document.querySelector('.full-item-picture');

    if (imagesBar) {
        imagesBar.addEventListener('click', function (e) {
            if (e.target.classList.contains('item-thumbnail')) {
            fullImage.style.opacity = 0;
            
            setTimeout(function() {
                 
                var thumbnail = e.target;
                var allThumbnails = document.querySelectorAll('.item-thumbnail');
                removeFilters(allThumbnails, 'active-thumbnail');
                thumbnail.classList.add('active-thumbnail');
                if (thumbnail.getAttribute('src')) {
                    var source = thumbnail.getAttribute('src');
                    
                    fullImage.setAttribute('src', source);
                        fullImage.style.opacity = 1;
                }
            
            }, 1000)
            }
           
        });
    }

    function removeFilters(pictureSet, filterClass) {
        for(var i = 0; i < pictureSet.length; i += 1) {
            pictureSet[i].classList.remove(filterClass);
        }
    }

    var buttonsContainer = document.querySelector('.item-detailed-description-container');
    if (buttonsContainer) {
        buttonsContainer.addEventListener('click', function (e) {
            if (e.target.classList.contains('property-button')) {
                changeHighligtedButton(e.target);
            }
        });
    }

    function changeHighligtedButton(target) {
        var buttons = target.parentNode.querySelectorAll('.property-button');
        for (var i = 0; i < buttons.length; i += 1) {
            buttons[i].classList.remove('highligted-property-button');
        }

        target.classList.add('highligted-property-button');
    }

    var addItemButton = document.querySelector('#add-item-button');

    if(addItemButton) {
        addItemButton.addEventListener('click', function () {

            window.bagStorage.addItemToBag(cloneObject(getItem()));
            window.updateTotals(window.bagStorage.totalCost, window.bagStorage.totalCount);
        });
    }

    function cloneObject(object) {
        var clone = {};
        var properties = Object.getOwnPropertyNames(object);
        for(var i = 0; i < properties.length; i += 1) {
            clone[properties[i]] = object[properties[i]];
        }
        return clone;
    }

})();
