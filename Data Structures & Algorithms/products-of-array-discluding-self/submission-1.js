class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [nums[0]], postfix = [nums.at(-1)];
        let res = [];

        for (let i = 1; i < nums.length; i++) {
            prefix = [...prefix, nums[i] * prefix[i - 1]];
            postfix = [...postfix, nums[nums.length - (i + 1)] * postfix.at(-1)];
        }

        postfix.reverse()

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                res.push(1 * postfix[1]);
            } else if (i === nums.length - 1) {
                res.push(prefix[nums.length - 2] * 1);
            } else {
                res.push(prefix[i - 1] * postfix[i + 1]);
            }
        }

        return res;
    }
}
