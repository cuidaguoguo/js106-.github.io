function create_updated_collection(collection_a, object_b) {
var C=[];
   C=object_b.value;
   var a;

  for(var i=0;i<C.length;i++)
  for(var j=0;j<collection_a.length;j++)
      if(C[i]==collection_a[j].key)
        {a=collection_a[j].count;
          collection_a[j].count=a-parseInt(a/3);}

return collection_a;
}

module.exports = create_updated_collection;
