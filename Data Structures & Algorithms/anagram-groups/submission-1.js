class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};

        for (let i of strs) {
            let count = new Array(26).fill(0);

            for (let c of i) {
                count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }

            const key = count.join(",");
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(i)
        }

        return Object.values(res);
    }
}
