class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;

        let l = 0;
        let r = heights.length - 1;

        while (l < r) {
            let currArea = (r - l) * (heights[l] < heights[r] ? heights[l] : heights[r]);
            maxArea = Math.max(maxArea, currArea);

            if (heights[l] > heights[r]) {
                r--;
            } else {
                l++;
            }
        }

        return maxArea;
    }
}
