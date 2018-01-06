'use strict';
function rank_by_two_large_one_small(collection){
  collection = collection.sort(function(a,b)
  {
  	return a - b;
  });
  for(var i = 0;i < collection.length;) {
    var temp = collection[i];
    collection[i] = collection[i+1];
    collection[i+1] = collection[i+2];
    collection[i+2] = temp;
    i += 3;
    if(collection.length - i < 3) {
      break;
    }
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
