'use strict';
var rank_asc = function(collection){
  collection = collection.sort();
    return collection.reverse();
};

module.exports = rank_asc;
