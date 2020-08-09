/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 使用数组排序后进行对比 空间复杂度O(3n)
// var isAnagram = function(s, t) {
//     if (s.length !== t.length) return false
//     const strS = s.split('').sort().join('')
//     const strT = t.split('').sort().join('')
//     if (strS == strT) return true
//     return false
// };

// 使用对象存储
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let jsonS = {}
    let jsonT = {}
    for (let i = 0; i < s.length; i++) {
        jsonS.hasOwnProperty(s[i]) ? jsonS[s[i]] ++ : jsonS[s[i]] = 0
        jsonT.hasOwnProperty(t[i]) ? jsonT[t[i]] ++ : jsonT[t[i]] = 0
    }
    const arr = Object.keys(jsonS)
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        if (!jsonT.hasOwnProperty(item) || jsonT[item] !== jsonS[item]) return false
    }
    return true
};