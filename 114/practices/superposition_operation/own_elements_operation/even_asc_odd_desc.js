'use strict';
var even_asc_odd_desc = function(collection){
  var left = [];
  var right = [];
  var temp;
  for(var i=0;i < collection.length;i++)
  {
  	if(collection[i]%2 == 0)
  	{
  		left.push(collection[i]);
  	}
  	else
  	{
  		right.push(collection[i]);
  	}
  }

  for(var i = 0;i < left.length;i ++)
  {
   for(var j = 0;j < left.length - i;j ++)
   {
     if(left[j] > left[j + 1]) {
       temp = left[j];
       left[j]=left[j+1];
       left[j+1]=temp;
     }
      }
  }

  for(var i = 0;i < right.length;i ++)
   {
   for(var j = 0;j < right.length - i;j ++) {
     if(right[j] < right[j + 1]) {
       temp = right[j];
       right[j]=right[j+1];
       right[j+1]=temp;
     }
     }
  }

  for(var i=0;i<right.length;i++)
  {
  	left.push(right[i]);
  }

  return left;
};
module.exports = even_asc_odd_desc;
