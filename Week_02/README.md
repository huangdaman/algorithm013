学习笔记

1.二叉树遍历
    前序遍历：左节点->根节点->右节点
    ```
        dfs(root)
        function dfs (root) {
            res.push(root.val)
            dfs(root.left)
            dfe(root.right)
        }
    ```
    中序遍历：根节点->左节点->右节点
    ```
        dfs(root)
        function dfs (root) {
            dfs(root.left)
            res.push(root.val)
            dfe(root.right)
        }
    ```
    后序遍历：左节点->右节点->根节点
    ```
        dfs(root)
        function dfs (root) {
            dfs(root.left)
            dfe(root.right)
            res.push(root.val)
        }
    ```