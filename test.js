/**
 * https://leetcode.com/problems/majority-element/submissions/1506101502/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElementLinear = function(nums) {
  let max;
  const map = {};
  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;
    
    if (!max || map[num] > map[max]) {
      max = num;
    }
  }

  return max;
};

// https://leetcode.com/problems/majority-element/submissions/1506123884/
var majorityElementQuadratic = function(nums) {
  const half = nums.length / 2;
  for (const num of nums) {
    let count = 0;
    for (const n of nums) {
      if (n === num) {
        count++;
      }
    }
    
    if (count > half) {
      return num;
    }
  }
};

