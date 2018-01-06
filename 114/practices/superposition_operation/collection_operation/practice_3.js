'use strict';

function hybrid_operation_to_uneven(collection) {
var sum = 0;
    collection.forEach(function (value) {
        if(value % 2 != 0){
            sum += value * 3 + 5;
        }
    });
return sum;
}

module.exports = hybrid_operation_to_uneven;

