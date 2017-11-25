var practice = function () {
    var num;
    var str = "";

    for(num = 99; num > 1; num --){
        if(num>2) {
            str += num + " bottles of beer on the wall, " + num + " bottles of beer.\n" +
                "Take one down and pass it around, " + (num - 1) + " bottles of beer on the wall.\n"
        }else  if(num===2){
             str += num + " bottles of beer on the wall, " + num + " bottles of beer.\n" +
                "Take one down and pass it around, " + (num - 1) + " bottle of beer on the wall.\n"
        }
    }

    str += "1 bottle of beer on the wall, 1 bottle of beer.\n" +
           "Take one down and pass it around, no more bottles of beer on the wall.\n"  +
           "No more bottles of beer on the wall, no more bottles of beer.\n" +
           "Go to the store and buy some more, 99 bottles of beer on the wall.\n";

    return str;
};

module.exports = practice;