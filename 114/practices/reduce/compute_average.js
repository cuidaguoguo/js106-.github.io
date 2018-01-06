'use strict';

function compute_average(collection) {
  var ave;
  var sum = 0;
  for(var i=0;i<collection.length;i++)
  {
  	sum+=collection[i];
  }
  ave = sum/collection.length;
return ave;
}

module.exports = compute_average;

