class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
        let freq = Array.from({length: nums.length + 1}, () => []);

        for (let i of nums) {
            count[i] = 1 + (count[i] ?? 0);
        }

        for (const [key, value] of Object.entries(count)) {
            freq[value].push(key);
        }

        let res = [];

        for (let i = freq.length - 1; i >= 0; i--) {
            if (freq[i] !== 0) {
                res = [...res, ...freq[i]];
            }
            if (res.length === k) {
                break;
            }
        }

        return res;
    }
}
