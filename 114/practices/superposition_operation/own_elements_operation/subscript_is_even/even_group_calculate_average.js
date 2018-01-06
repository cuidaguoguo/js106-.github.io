'use strict';
var even_group_calculate_average = function(collection){
   var even = [];//第偶个元素集合
   for(var i=0;i<collection.length;i++){
      if(i%2 == 0) {
        collection[i].push(even);
      }
   }



};
module.exports = even_group_calculate_average;
