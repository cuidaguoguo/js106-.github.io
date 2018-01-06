'use strict';

function average_uneven(collection) {
var A = [];
    var sum = 0;
    var ave,i;
    for(i=0;i<collection.length;i++)
    {
    	if(collection[i]%2 != 0)
    	{
    		A.push(collection[i]);
    	}
    }

    A.forEach(function (value) {

            sum += value;

    });

    ave = sum/A.length;
return ave;
}

module.exports = average_uneven;
