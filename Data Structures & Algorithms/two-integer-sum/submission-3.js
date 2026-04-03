class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let matchSet = {};

        for (const [index, value] of nums.entries()) {
            let matchedNum = target - value;

            if (matchedNum in matchSet) {
                return [matchSet[matchedNum], index];
            } else {
                matchSet[value] = index;
            }
        }

        return null;
    }
}
