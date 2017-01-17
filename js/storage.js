'use strict';

    var bagStorageName = 'bagStorage';
    
    var storage = {

        get bagParams() {
            var params = JSON.parse(window.localStorage.getItem(bagStorageName)) || {};
            return params;
        },

        set bagParams(uploadedStats) {
            localStorage.setItem(bagStorageName, JSON.stringify(uploadedStats));
        }
    }
