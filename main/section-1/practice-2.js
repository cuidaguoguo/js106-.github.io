'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var result = [];
    for (var a = 0; a < collectionA.length; a++) {
        for (var i = 0; i < collectionB.length; i++) {
            for (var j = 0; j < 4; j++) {
                if (collectionA[a]==collectionB[i][j]){
                    result.push(collectionB[i][j]);
                }
            }
        }
    }
  console.log(result);
  return result;
};
