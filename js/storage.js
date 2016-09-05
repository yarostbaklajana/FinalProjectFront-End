'use strict';
$(document).ready(function () {

    var storage = getStorage();

    function getStorage() {
        var bagItems ;
        var totalPrice;
        var totalQuantity;

        if(JSON.parse(localStorage.getItem('bagItems') == null)) {
            bagItems = [];
            totalPrice = {
                value: 0
            };
            totalQuantity = {
                value: 1
            };
        } else {
            bagItems = JSON.parse(localStorage.getItem('bagItems'))
            totalQuantity = JSON.parse(localStorage.getItem('quantity'));
            totalPrice = JSON.parse(localStorage.getItem('totalPrice'));
        }

        var storage = {
            bagItems: bagItems,
            refreshData: function () {
                localStorage.setItem('bagItems', JSON.stringify(this.bagItems));
            },
            removeAllData: function () {
                localStorage.removeItem('bagItems');
            },
            getTotalPrice: function() {
                var totalPrice = 0;
                this.bagItems.forEach(function(item) {
                    totalPrice += parseFloat(item.price).toFixed(2) * item.quantity;
                });
                return totalPrice;
            },
            getTotalQuantity: function () {
                var totalQuantity = 0;
                this.bagItems.forEach(function(item) {
                    totalQuantity += item.quantity;
                });
                return totalQuantity;
            },
            addItem: function (item) {
                var items = this.bagItems;
                item.quantity = 1;
                items.filter(function(obj, index) {
                    if(item.name == obj.name && item.size == obj.size && item.color == obj.color) {
                        item = obj;
                        items.splice(index, 1);
                        item.quantity += 1;
                    }
                });
                items.push(item);
            },
            removeItem: function (item) {
                var items = this.bagItems;
                var self = this;
                items.filter(function (obj, index) {
                    if (obj.name == item.data('name') && obj.size == item.data('size') && obj.color == item.data('color')) {
                        items.splice(index, 1);
                        self.totalPrice -= parseFloat(obj.price).toFixed(2) * obj.quantity;
                        self.totalQuantity -= obj.quantity;
                    }
                });
            }
        }

        return storage;
    }

    if(storage.bagItems == '' || storage.bagItems == null) {
        setEmptyMessage();
        setPriceToZero();
    } else {
        updatePrice();
    }

    $('#add-to-bag-btn').click(function() {
        var item = createItem();
        storage.addItem(item);
        storage.refreshData();
        updatePrice();
    });

    $('#buy-items').click(function () {
            if(storage.bagItems != '') {
                storage.removeAllData();
                setPriceToZero();
                $('#bag-body .empty-purchased-message').siblings().hide();
                $('#bag-body .empty-purchased-message').show();
            }
    });

    $('#clear-bag').click(function () {
        storage.removeAllData();
        $('#bag-body .empty-bag-message').siblings().hide('slow');
        setEmptyMessage();
        setPriceToZero();
    });

    $('.remove-item-btn').click(function(e) {
        var itemFigure = $(e.target).parent().parent();
        itemFigure.addClass('disappear');
        itemFigure.hide(500);
        storage.removeItem($(e.target));
        storage.refreshData();
        updatePrice();
        if(storage.bagItems == '') {
            setEmptyMessage();
        }
    });

    function setPriceToZero() {
        $('.total-price').text('0.00');
        $('#total-count').text(0);
    }

    function updatePrice() {
            $('.total-price').text(storage.getTotalPrice().toFixed(2));
            $('#total-count').text(storage.getTotalQuantity());
    }

    function setEmptyMessage() {
        $('#bag-body .empty-bag-message').siblings().hide();
        $('#bag-body .empty-bag-message').show();
    }

    function createItem() {
        var item = {
            name: $('#item-name').text(),
            image: $('#item-image').attr('src'),
            price: $('#item-price').text(),
            color: $('input:checked + label.color-label').text(),
            size: $('input:checked + label.size-label').text()
        }


        return item;
    }

});