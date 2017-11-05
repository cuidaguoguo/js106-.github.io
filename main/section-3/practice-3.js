'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var result = [];
    var c = [];
    for (var i = 0; i < collectionA.length;) {
        var count = 0;
        for (var j = 0; j < collectionA.length; j++) {
            if (collectionA[i] == collectionA[j]) {
                count++;
            }
        }
        c.push({key: collectionA[i], count: count});
        i += count;
    }
    for (var i=0;i<c.length;i++){
      for(var j=0;j<4;j++){
        if(c[i].key==objectB.value[j]) {
          c[i].count-=parseInt(c[i].count / 3);
        }
      }
      result.push({key:c[i].key,count:c[i].count})
    }
    return result;
}
