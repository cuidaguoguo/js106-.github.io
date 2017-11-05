'use strict';

module.exports = function countSameElements(collection) {
  var result = [];
  for (var i=0;i<collection.length;){
     if(collection[i].indexOf("-")>0){
          result.push({key:collection[i].split("-")[0],count:parseInt(collection[i].split("-")[1])});
          i++;
          continue;
     }
   var count = 0;
   for(var j=0;j<collection.length;j++){
      if(collection[i]==collection[j]){
      count++;
      }
   }
   result.push({key:collection[i],count:count});
   i+=count;

  }
  return result;
}
