'use strict';

module.exports = function countSameElements(collection) {
  var result = [];
  var collectionB = [];
  for (var i=0;i<collection.length;){
     var count = 0;
     for(var j=i;j<collection.length;j++){
         if(collection[i]==collection[j]){
           count++;
         }
         else{
             break;
         }
     }
     if(collection[i].indexOf("-")>0){
          result.push({key:collection[i].split("-")[0],count:parseInt(collection[i].split("-")[1])});
          i++;
          continue;
     }
     else if(collection[i].indexOf(":")>0){
         result.push({key:collection[i].split(":")[0],count:parseInt(collection[i].split(":")[1])});
          i++;
          continue;
     }
     else if(collection[i].indexOf("[")>0 ){
          result.push({key:collection[i].split("[")[0],count:parseInt(collection[i].split("[")[1])});
          i++;
          continue;
     }
     result.push({key:collection[i],count:count});
     i+=count;

  }
  for(var i = 0;i < result.length; ){
         var count = 0;
         var count1=0;
         var arr = {};
         for(var j = i; j < result.length; j++)
         {
             if (result[i]['key'] == result[j]['key'])
             {
                 count++;
                 count1 += result[j]['count'];
             }
         }
         arr["name"] = result[i]['key'];
         arr["summary"] = count1;
         collectionB.push(arr);
         i += count;
     }

  console.log(collectionB);
  return collectionB;
}
