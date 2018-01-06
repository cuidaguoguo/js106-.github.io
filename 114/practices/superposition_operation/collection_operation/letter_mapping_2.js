'use strict';

function average_to_letter(collection) {
var collection_all = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
  var sum=0,i;
  for(i=0;i<collection.length;i++)
  {
  	sum+=collection[i];
  }
   var avg = Math.ceil(sum / collection.length);
return collection_all[avg-1];
}

module.exports = average_to_letter;

