function count_same_elements(collection) {
const result =[];
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

        result.push({
            key: collection[i],
            count: c
            })
        i+=c;
   }

return result;
}

module.exports = count_same_elements;
