/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var result="";
    var array= s.split('');
    for (var i=array.length-1; i>=0; i--){
        result= result + array[i];
    }
    return result;
};