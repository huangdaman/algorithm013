/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     const hash = {}
//     for (let i = 0; i < nums.length; i++) {
//         if (hash[target - nums[i]]) {
//             return [hash[target - nums[i]].index, i]
//         } else {
//             hash[nums[i]] = {
//                 index: i
//             }
//         }
//     }
//     hash = null
// };

// 使用while循环
var twoSum = function(nums, target) {
    const hash = [];
    let count = 0
    while (count < nums.length) {
        let res = target - nums[count]
        if (hash[res]) {
            return [hash[res], count]
        } else {
            hash[nums[count]] = String(count)
        }
        count++
    }
};