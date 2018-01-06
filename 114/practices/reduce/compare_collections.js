'use strict';

function compare_collections(collection_a, collection_b) {
 for(var i=0;i < collection_a.length;i++)
  {
     for(var j=0;i <collection_b.length;j++)
     {
     	if(collection_a[i] == collection_b[j])
     		return true;
     }

  }
}

module.exports = compare_collections;


