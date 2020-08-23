二分查找
### 定义
    是一种在数组中查找数据的算法，但它只能查找排好序的数据。先找出中间值，将目前值与中间值对比，即可得知道目标值是在中间值的左边还是右边。从而可以排除掉一半的数组，然后再逐层对比，直到找到目标值。
### 代码模板
```
let left = 0, right = len(array) - 1
while (left <= right) {
  let mid = (left + right) >> 1
  if (array[mid] === target) { /*find the target*/; return }
  else if (array[mid] < target) left = mid + 1
  else right = mid - 1
}
```
### 例题 leetcode 33.搜索旋转排序数组
```
假设按照升序排序的数组在预先未知的某个点上进行了旋转。
( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
你可以假设数组中不存在重复的元素。
你的算法时间复杂度必须是 O(log n) 级别。

示例 1:
输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
```
分析： 这题可以通过二分查找算法解答，先找出中间值。然后找出有序递增是在那一边，如果这边是有序排序再判断目标值是否在其内，在其内则说明目标在这边否则在另一边。则可以继续进行二分查找
```
var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const mid = (l + r) >> 1
        if (nums[mid] === target) return mid

        if (nums[mid] >= nums[l]) {
            if (nums[mid] > target && target >= nums[l]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else {
            if (target <= nums[r] && target >= nums[mid]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }
    return -1
};
```