(function() {
     
   
    var bagStorage =  {
    bag: storage.bagParams.bag || [],
       totalCost: storage.bagParams.totalCost || 0,
       totalCount: storage.bagParams.totalCount || 0,
       addItemToBag: function(item) {
           
           if( getIndexOfItem(this.bag, item) !== -1) {
               this.bag[getIndexOfItem(this.bag, item)].quantity += 1;
           } else {
               item.id = this.bag.length;
               this.bag.push(item);
           }
           
           this.totalCost += item.price;
           this.totalCount += 1;
           updateState(this.bag, this.totalCost, this.totalCount);
       }, 
       clearBag: function() {
           this.bag = [],
           this.totalCount = 0;
           this.totalCost = 0;
           updateState(this.bag, this.totalCost, this.totalCount);
       },
       removeItem: function(id) {
           this.bag.splice(id, 1);
           this.totalCost -= item.price * item.quantity;
           this.totalCount -= item.quantity;
           updateState(this.bag, this.totalCost, this.totalCount);
       }
    }

    function getIndexOfItem(array, item) {
        for(var i = 0; i < array.length; i += 1) {
            if(array[i].name === item.name && array[i].source === item.source && array[i].price === item.price && array[i].size === item.size && array[i].color === item.color) {
                  return i;
            }
        }

        return -1;
    }
     
     function updateState(bag, totalCost, totalCount) {
        storage.bagParams = {
            bag: bag,
            totalCost: totalCost,
            totalCount: totalCount
            };
    }

    window.bagStorage = bagStorage;
})();