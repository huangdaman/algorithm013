学习笔记

### 递归
把一种通过重复将问题分解为同类子问题而解决问题的方法。

相关问题：斐波那契数列，遍历链表，反转链表，树的遍历

### 分治
定义：将一个问题分解为多个规模的小问题，最后逐层合并结果
解题步骤:
    1. 分解，将要解决的问题划分成若干规模较小的问题
    2.求解，当子问题划分得足够小时，用简单的方法解决
    3.合并，按原问题的要求，将子问题的解逐层合并构成原问题的解
相关问题：数组的归并排序，找出假伪币

### 回溯
定义：实际上是一个类似枚举的搜索尝试过程，主要是在搜索尝试过程中寻找问题的解，当发现已不满足求解条件时，就返回，尝试别的路径，相当于递归算法加上深度优先。
解题步骤：
    1. 针对所给问题，定义问题的解空间，它至少包含问题的一个解
    2.确定易于搜索的解空间结构，使得能用回溯法方便地搜索空间
    3.以深度优先的方式搜索解空间，并且在搜索过程中用剪枝函数避免无效搜索
相关问题：八皇后，全排列

上面三种算法基本是类似，只是有比较微妙的区别，分治和回溯会用到递归
