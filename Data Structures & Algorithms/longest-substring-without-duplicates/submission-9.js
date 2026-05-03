class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charSet = new Set();
        let l = 0;
        let r = 0;
        let longestSubstring = 0;

        for (r = 0; r < s.length; r++) {
            while (charSet.has(s[r])) {
                charSet.delete(s[l]);
                l++;
            }
            charSet.add(s[r]);
            longestSubstring = Math.max(longestSubstring, r - l + 1);
        }

        return longestSubstring;
    }
}
