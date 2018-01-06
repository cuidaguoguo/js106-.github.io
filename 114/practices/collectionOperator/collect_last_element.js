'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  var arr;
      for(var i = 0;i <collection.length;i ++) {
          if(i == collection.length - 1) {
              arr  = collection[i];
          }
      }
return arr;
}

module.exports = collect_last_element;
