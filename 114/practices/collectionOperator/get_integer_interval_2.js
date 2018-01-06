'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
    var result =[];
    var i;
        if(number_a < number_b){
            for(i = number_a; i <= number_b; i++){
                if(i%2 == 0)
                    {result.push(i);}
            }
        }else if(number_a > number_b){
              for (i = number_a; i >= number_b; i --){
                  if(i%2 == 0)
                    {result.push(i);}
              }
        }else if(number_b == number_a){
            if(number_a%2 == 0)
                {result.push(number_a);}
        }
return result;
}

module.exports = get_integer_interval_2;
