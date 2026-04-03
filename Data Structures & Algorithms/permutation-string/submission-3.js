class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        function matches(a, b) {
            for (let i = 0; i < 26; i++) {
                if (a[i] !== b[i]) {
                    return false
                }
            }
            return true
        }

        const n1 = s1.length;
        const n2 = s2.length;

        if (n1 > n2) {
            return false;
        }

        let countS1 = new Array(26).fill(0);
        let countS2 = new Array(26).fill(0);

        for (let i = 0; i < n1; i++) {
            countS1[s1.charCodeAt(i) - 97] += 1;
            countS2[s2.charCodeAt(i) - 97] += 1;
        }

        if (matches(countS1, countS2)) {
            return true;
        }

        for (let i = n1; i < n2; i++) {
            countS2[s2.charCodeAt(i) - 97] += 1;
            countS2[s2.charCodeAt(i - n1) - 97] -= 1;
            if (matches(countS1, countS2)) {
                return true;
            }
        }

        return false;
    }
}
