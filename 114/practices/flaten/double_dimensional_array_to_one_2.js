'use strict';

function double_to_one(collection) {

var result = [];
    for (var i = 0; i < collection.length; i++){
        for (var j = 0; j < collection[i].length; j++){
            if(result.indexOf(collection[i][j]) == -1){
                result.push(collection[i][j]);
            }
        }
    }
return result;
}

module.exports = double_to_one;
