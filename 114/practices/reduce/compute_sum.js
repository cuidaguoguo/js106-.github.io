'use strict';

function calculate_elements_sum(collection) {
 var sum = 0;
  for(var i=0;i < collection.length;i++)
  {
  	sum += collection[i];
  }
return sum;
}

module.exports = calculate_elements_sum;

