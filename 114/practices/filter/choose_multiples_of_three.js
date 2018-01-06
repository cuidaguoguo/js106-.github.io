'use strict';

function choose_multiples_of_three(collection) {
var result = [];
    for(var i = 0; i < collection.length; i++){
        if(collection[i] % 3 == 0){
            result.push(collection[i]);
        }
    }
return result;
}

module.exports = choose_multiples_of_three;
