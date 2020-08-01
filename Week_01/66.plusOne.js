/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 先转数字加1，再转回数组  当数组长度过大时，会出现精度丢失问题（js精度计算问题）
// var plusOne = function(digits) {
//     return ( Number(digits.join('')) + 1).toString().split('')
// };

// 通过递归遍历
// var plusOne = function(digits) {
//     calcDigits(digits.length -1)
//     function calcDigits(i) {
//         digits[i]++
//         if (digits[i] > 9) {
//             digits[i] = 0
//             const prev = --i
//             if (prev < 0) {
//                 digits.unshift(1)
//             } else {
//                 calcDigits(prev)
//             }
//         }
//     }
//     return digits
// };

// 外国友人解决方案
var plusOne = function(digits) {
    const length = digits.length - 1
    for (let i = length; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            return digits
        }

        digits[i] = 0
    }

    let newArr = new Array(length + 2).fill(0)
    newArr[0] = 1
    return newArr
};