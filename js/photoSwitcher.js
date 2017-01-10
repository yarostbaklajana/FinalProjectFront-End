(function() {
    var imagesBar = document.querySelector('.item-images-bar');
    var fullImage = document.querySelector('.full-item-picture');
    
    imagesBar.addEventListener('click', function(e) {
        if(e.target.classList.contains('item-thumbnail')) {
            var thumbnail = e.target;
            var allThumbnails = document.querySelectorAll('.item-thumbnail');
            removeFilters(allThumbnails, 'active-thumbnail');
            thumbnail.classList.add('active-thumbnail');
            if(thumbnail.getAttribute('src')) { 
                var source = thumbnail.getAttribute('src');
                fullImage.setAttribute('src', source);
            }
        }
    });

    function removeFilters(pictureSet, filterClass) {
        pictureSet.forEach(function(picture) {
            picture.classList.remove(filterClass);
        });  
    }
 })();