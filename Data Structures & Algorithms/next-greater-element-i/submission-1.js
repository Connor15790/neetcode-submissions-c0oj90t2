class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let hashMap = Object.fromEntries(
            nums1.map((n, i) => [n, i])
        )
        let res = new Array(nums1.length).fill(-1);
        let stack = [];

        for (let i = 0; i < nums2.length; i++) {
            while (stack.length && stack.at(-1) < nums2[i]) {
                let poppedVal = stack.pop();
                res[hashMap[poppedVal]] = nums2[i];
            }

            if (nums2[i] in hashMap) {
                stack.push(nums2[i]);
            }
        }

        return res
    }
}
