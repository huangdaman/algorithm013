/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 遇到0直接移除，在尾部重新添加0
var moveZeroes = function(nums) {
    var j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) [nums[j++], nums[i]] = [nums[i], nums[j]]
    }
    return nums
};
// var arr = [0,1,0,3,12]
// var arr = [0,0,0,0,0]
var arr = [0,90,1,45]
moveZeroes(arr)
console.log(arr)