class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const matchSet = {};

        for (let i of nums) {
            if (!matchSet[i]) {
                matchSet[i] = 1
            } else {
                matchSet[i]++
            }
        }

        const mostOccuring = Object.entries(matchSet).sort(([, v1], [, v2]) => v1 - v2).slice(-k).map(([v]) => Number(v));

        return mostOccuring;
    }
}
