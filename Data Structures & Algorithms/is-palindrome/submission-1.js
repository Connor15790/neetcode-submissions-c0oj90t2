class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const replacedString = s.split(" ").join("").replace(/[^a-z0-9]/gi, '').toLowerCase();

        let l = 0, r = replacedString.length - 1

        while (l <= r) {
            if (replacedString[l] !== replacedString[r]) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }
}
