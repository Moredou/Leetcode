/**
 * @param {number[]} nums
 * @return {number}
 */


var singleNumber = function(nums) {
    var total;

    for (i=0; i< nums.length; i++){
        var num = nums[i];
         total ^=num;
    }
    return total;
};
