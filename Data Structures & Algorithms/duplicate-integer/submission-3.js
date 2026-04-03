class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashSet = new Set();

        for (let i of nums) {
            if (hashSet.has(i)) {
                return true;
            }
            hashSet.add(i)
        }

        return false;
    }
}
