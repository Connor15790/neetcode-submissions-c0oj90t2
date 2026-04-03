class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMap = {};
        let secNum;

        for (let i = 0; i < nums.length; i++) {
            secNum = target - nums[i];
            if (secNum in numMap) {
                return [i, numMap[secNum]]
            }
            numMap[nums[i]] = i
        }
    }
}
