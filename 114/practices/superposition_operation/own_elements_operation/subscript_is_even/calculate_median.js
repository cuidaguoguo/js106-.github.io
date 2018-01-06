'use strict';
var calculate_median = function(collection){
    var result = [];
    for(var i = 0;i < collection.length;i ++) {
      if(collection[i] % 2 === 0) {
        result.push(collection[i]);
      }
    }
    var C;
    var index, another;
    if(result.length % 2 === 0) {
       index = result[(result.length / 2) -1];
       another = result[result.length / 2];
       C = parseInt(( Number(index) + Number(another)) / 2);
    }else {
       C = result[Number(parseInt(result.length / 2) -1 ) + Number(result.length % 2)];
    }
    return C;
};
module.exports = calculate_median;
