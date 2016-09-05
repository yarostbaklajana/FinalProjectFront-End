'use strict';
$(document).ready( function() {

    var elem = $("#filters .dropdown-filters");

    $('.filter-btn').click(function() {
        $('.dropdown-filters').toggle();
    });

    $("#filters .dropdown-filters").on('swipeleft', function(e) {
        if($(e.target).is('span')) {
            addClone($(e.target).parent());
            highlight($(e.target).parent());
            var width = getWidthOfRemoved($(e.target).parent());
            removeOverScreenElements($(e.target).parent());
            moveLeft($(e.target).parent(), width);
            addSelectedFiltersToHeader($(e.target).parent());
        }
    });

    elem.on('click',  function(e) {
        if($(e.target).is('span')) {
            addClone($(e.target).parent());
            highlight($(e.target).parent());
            var width = getWidthOfRemoved($(e.target).parent());
            removeOverScreenElements($(e.target).parent());
            moveLeft($(e.target).parent(), width);
            addSelectedFiltersToHeader($(e.target).parent());
        }
    });

    function addClone(filterValue) {
        var line = filterValue.parent();
        if(line.position().left >= 0) {
            line.append(line.children().clone());
        }
    }

    function getWidthOfRemoved(filterValue) {
        var line = filterValue.parent();
        var width = 0;

        for(var i = 0; i < $(line.children()).length; i += 1) {
            if($(line.children()[i]).offset().left < 0) {
                width += $(line.children()[i]).outerWidth(true);
            }
        }

        return width;
    }

    function removeOverScreenElements(filterValue) {
        var line = filterValue.parent();
        var last = filterValue.parent().children().last();
        line.children().filter(function(index, item) {
            if($(item).offset().left < 0) {
                var tail = $(item).clone();
                tail.offset({
                    right: - last.offset().right + last.outerWidth(true)
                });
                line.append(tail);
                return true;
            }
        }).css({
                float: 'left'
            }).contents().animate({
                width: 0
            },
            700,
        function() {
            $(this).parent().remove();
        })



    }

    function moveLeft(filterValue, previousRemovedWidth) {
        var firstNode = filterValue.parent().children().first();
        var line = filterValue.parent();


        if(!firstNode.hasClass('selected-filter')) {
                line.css({
                    position: 'relative'
                }).animate({
                        left: - filterValue.position().left + previousRemovedWidth + 40
                    }, 700)
        }

    }

    function highlight(filterValue) {
        filterValue.parent().children().map(function(index) {
            if($(this).hasClass('selected-filter')) {
                $(this).removeClass('selected-filter');
            }
        });

        filterValue.addClass('selected-filter');
    }

    function addSelectedFiltersToHeader(filterValue) {
        var currentFilterLine = filterValue.parent();
        var linesArray = currentFilterLine.parent().children('.swipe-line');
        var index = linesArray.index(currentFilterLine);
        var properties = $('.item-property');
        var currentPropertyField = $(properties.get(index));
        currentPropertyField.removeClass('not-selected-property');
        $(currentPropertyField.empty());
        $(currentPropertyField.text(filterValue.text()));
        console.log(index);
        if(filterValue.hasClass('not-selected-property')) {
            $(currentPropertyField.addClass('not-selected-property'));
        }

        var selectFilters = $('.filters-select select option:first-child');
        var currentSelectFilter = $(selectFilters.get(index));
        $(currentSelectFilter.text(filterValue.text())).prop('selected', true).prop('disabled', false);
    }
});


