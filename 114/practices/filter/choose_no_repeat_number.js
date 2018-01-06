'use strict';

function choose_no_repeat_number(collection) {

var result = [];
    for(var i = 0;i < collection.length;) {
        var count = 0;
        for(var j = i;j < collection.length;j ++) {
            if(collection[i] === collection[j]) {
                count ++;
            }
        }
        result.push(collection[i]);
        i += count;
    }
return result;
}

module.exports = choose_no_repeat_number;
