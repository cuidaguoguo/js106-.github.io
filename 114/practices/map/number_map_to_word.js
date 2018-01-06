'use strict';
var number_map_to_word = function(collection){

  var collection_all = [
        '','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    var result = [];
    for (var i = 0; i < collection.length; i ++){
        result.push(collection_all[collection[i]]);
    }
    return result;
};

module.exports = number_map_to_word;
