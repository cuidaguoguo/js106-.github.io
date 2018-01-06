'use strict';

function compute_median(collection) {
 var arr = [];
  var result;
  collection.sort(function(a,b) {
    return a-b;
  });
  var one, two;
  if(collection.length % 2 === 0) {
     one = collection[(collection.length / 2) -1];
     two = collection[collection.length / 2];
     result =( Number(one) + Number(two)) / 2;
  }else {
    result = collection[Number(parseInt(collection.length / 2) -1 ) + Number(collection.length % 2)];
  }
return result;
}

module.exports = compute_median;


