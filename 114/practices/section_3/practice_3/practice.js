function create_updated_collection(collection_a, object_b) {
const C =[];
   for(var i=0;i < collection_a.length;)
   {
      var c = 0;
      for(var j = i;j < collection_a.length;j++)
      {
      	 if(collection_a[i] == collection_a[j])
      	 {
      	 	c++;

      	 }
      }

        C.push({
            key: collection_a[i],
            count: c
            })
        i+=c;
   }

   var array=[];
   array=object_b.value;
   var f;
   for(var i=0;i<array.length;i++)
   {
     for(var j=0;j<C.length;j++)
      if(array[i]==C[j].key)
              {f=C[j].count;
          C[j].count=f-parseInt(f/3);}

    }


return C;
}

module.exports = create_updated_collection;
