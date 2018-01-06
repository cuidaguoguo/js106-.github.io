'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var result = [];
  for(var i=0;i<collection.length;i++)
  {
      var c = collection[i];
      if (c%2 == 0)
      {
          result.push(c);
      }

  }
return result;
}

module.exports = collect_all_even;
