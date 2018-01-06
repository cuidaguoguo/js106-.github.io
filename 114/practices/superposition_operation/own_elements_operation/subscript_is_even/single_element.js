'use strict';
var single_element = function(collection){
    var result = [];
    var arr = [];
    for(var i =0;i < collection.length;i++)
    {
      if(i%2 != 0)
      {
        arr.push(collection[i]);
      }
    }
    for(var j = 1; j < arr.length; j++){
        if(arr.indexOf(arr[j]) == arr.lastIndexOf(arr[j])){
            result.push(arr[j]);
        }
    }
    return result;
};
module.exports = single_element;
