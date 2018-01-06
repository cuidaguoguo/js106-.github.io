'use strict';

function grouping_count(collection) {

 var result ={};
   collection.sort();
   for(var i=0;i < collection.length;)
   {
      var c = 0;
      for(var j = i;j < collection.length;j++)
      {
      	 if(collection[i] == collection[j])
      	 {
      	 	c++;
      	 }
      }
   		result[collection[i]]= c;

        i+=c;
   }

return result;
}

module.exports = grouping_count;
