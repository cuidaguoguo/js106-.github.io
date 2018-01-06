'use strict';
var map_to_three_multiples = function(collections){
  for(var i = 0; i < collections.length; i++){
        collections[i] *= 3;
    }
    return collections;
};

module.exports = map_to_three_multiples;
