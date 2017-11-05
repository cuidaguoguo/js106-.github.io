'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var result=[];
  for (var i=0;i<collectionA.length;i++){
    for (var j=0;j<4;j++){
      if(collectionA[i]==objectB.value[j]){
        result.push(collectionA[i]);
      }
    }
  }

  console.log(result);
  return result;
};
