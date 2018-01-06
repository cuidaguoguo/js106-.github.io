'use strict';

function median_to_letter(collection) {
var collection_all = [
        '','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','aa',
        'ab','ac','ad','ae','af','ag','ah','ai','aj','ak','al','am','an','ao',
        'ap','aq','ar','as','at','au','av','aw','ax','ay','az','ba'
    ];
  var ave,sum;
  sum = collection[0]+collection[collection.length-1];

  ave = Math.ceil(sum/2);
return collection_all[ave];
}

module.exports = median_to_letter;
