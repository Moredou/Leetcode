/**
 * @param {string} s
 * @return {string}
 */
// idea   
// split the array first (just like Tom > "T" "o" "m" )then reveser it ("T" "o" "m" > "m" "o" "T")
// There is no need to joint them.

var reverseString = function(s) {
    var result="";
    var array= s.split('');
    for (var i=array.length-1; i>=0; i--){
        result= result + array[i];
    }
    return result;
};
