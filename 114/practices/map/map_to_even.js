'use strict';
function map_to_even(collection){
  for (var i = 0; i < collection.length; i++){
        collection[i] *= 2;
    }
return collection;
}
module.exports = map_to_even;
