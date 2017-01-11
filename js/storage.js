'use strict';

    const bagStorageName = 'bagStorage';
    
    var BAG_STORAGE = {

        get bagStats() {
            var stats = JSON.parse(window.localStorage.getItem(bagStorageName)) || {};
            return stats;
        },

        set bagStats(uploadedStats) {
            localStorage.setItem(bagStorageName, JSON.stringify(uploadedStats));
        }
    }
