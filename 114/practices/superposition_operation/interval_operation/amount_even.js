'use strict';

function amount_even(collection) {
var sum = 0;
    collection.forEach(function (value) {
        if(value % 2 == 0){
            sum += value;
        }
    });
return sum;
}

module.exports = amount_even;
