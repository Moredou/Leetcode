/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num >= 10){
       var n = num;
       var sum = 0;

       while(parseInt(n/10) > 0){
           sum += parseInt(n%10);
           n = parseInt(n/10);
       }

       num = parseInt(n%10) + sum;
    }
    return num;
};