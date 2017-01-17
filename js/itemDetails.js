(function () {

    var itemDetails = {
        setItemView: setItemView(getItem())
    }

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
        properties.forEach(function(property) {
            if(property.classList.contains('size-property')) {
                item.size = property.value;
            }

            if(property.classList.contains('color-property')) {
                item.color = property.value;
            }
        });
    }

    function setItemView(item) {
        if (item !== undefined) {

            document.querySelector('.full-item-picture').setAttribute('src', 'img/items/' + item.source);
            var thumbnails = document.querySelectorAll('.item-thumbnail');
            thumbnails.forEach(function (thumbnail, index) {
                if (item.thumbnails.length > index) {
                    thumbnail.setAttribute('src', 'img/items/' + item.thumbnails[index]);
                } else {
                    thumbnail.parentNode.removeChild(thumbnail);
                }
            });
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
    }



    var imagesBar = document.querySelector('.item-images-bar');
    var fullImage = document.querySelector('.full-item-picture');

    if (imagesBar) {
        imagesBar.addEventListener('click', function (e) {
            if (e.target.classList.contains('item-thumbnail')) {
                var thumbnail = e.target;
                var allThumbnails = document.querySelectorAll('.item-thumbnail');
                removeFilters(allThumbnails, 'active-thumbnail');
                thumbnail.classList.add('active-thumbnail');
                if (thumbnail.getAttribute('src')) {
                    var source = thumbnail.getAttribute('src');
                    fullImage.setAttribute('src', source);
                }
            }
        });
    }

    function removeFilters(pictureSet, filterClass) {
        pictureSet.forEach(function (picture) {
            picture.classList.remove(filterClass);
        });
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
    addItemButton.addEventListener('click', function () {
        window.bagStorage.addItemToBag(Object.assign({}, getItem()));
    });

})();
