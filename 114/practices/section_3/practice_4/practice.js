function create_updated_collection(collection_a, object_b) {
const result =[];

    for(var i=0;i < collection_a.length;)
    {
      var c = 0;
      var res={};
      for(var j = i;j < collection_a.length;j++)
      {
      	 if(collection_a[i] == collection_a[j])
      	 {
      	 	c++;
      	 }

      }
      if(collection_a[i].indexOf("-")>0)
      	 {
      	 	res['key'] = collection_a[i].split("-")[0];
      	 	res['count']= parseInt(collection_a[i].split("-")[1]);
      	 	result.push(res);
      	 	i++;
      	 	continue;
      	 }
        res["key"]=collection_a[i];
        res["count"]=c;

        result.push(res);
        i+=c;
   }
       var C=[];
       C=object_b.value;
       var a;
		for(var i=0;i<C.length;i++)
		  for(var j=0;j<result.length;j++)
		      if(C[i]==result[j].key)
		        {a=result[j].count;
		          result[j].count=a-parseInt(a/3);}
        return result;

}

module.exports = create_updated_collection;
