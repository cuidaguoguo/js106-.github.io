function collect_same_elements(collection_a, collection_b) {
var result = [];
    for(var i = 0; i < collection_a.length; i++){
        for(var j = 0; j < collection_b.length; j++){
            if(collection_b[j] == collection_a[i]){
                result.push(collection_a[i]);
                break;
            }
        }
    }
return result;
}

module.exports = collect_same_elements;
