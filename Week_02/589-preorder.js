/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// dfs
var preorder = function(root) {
    if (!root) return []
    const stack = []
    let res = []
    stack.push(root)
    while (stack.length) {
        const item = stack.pop()
        res.push(item.val)
        if (item.children) {
            for (let i = item.children.length - 1; i >= 0; i--) {
                stack.push(item.children[i])
            }
        }
    }
    return res
};


// 递归
// var preorder = function(root) {
//     if (!root) return []
//     let res = []
//     dfs(root)
//     function dfs (root) {
//         res.push(root.val)
//         if (root.children) {
//             for (let i = 0; i < root.children.length; i++) {
//                 dfs(root.children[i])
//             }
//         }
//     }
//     return res
// };