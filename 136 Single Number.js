/**
 * @param {number[]} nums
 * @return {number}
 */

// when the single is 0, then does this can do that?
var singleNumber = function(nums) {
    var total = 0;

    for (i=0; i< nums.length; i++){
        var num = nums[i];
         total ^=num;
    }
    return total;
};
