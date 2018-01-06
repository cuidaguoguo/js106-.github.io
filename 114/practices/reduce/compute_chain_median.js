'use strict';

function compute_chain_median(collection) {
   var result = [];
   collection = collection.split('->');
   collection.sort(function(a,b){
   	   return a-b;
   });
   var index, another;
   if(collection.length % 2 === 0) {
     index = collection[(collection.length / 2) -1];
     another = collection[collection.length / 2];
     result =( Number(index) + Number(another)) / 2;
   }else {
    result = collection[Number(parseInt(collection.length / 2) -1 ) + Number(collection.length % 2)];
   }
return result;
}

module.exports = compute_chain_median;
