/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (const i in nums) {
    for (const j in nums) {
      if (i !== j && nums[i] + nums[j] === target) {
        return [i,j];
      }
    }
  }
};
// @lc code=end

