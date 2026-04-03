class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};

    for (let i of strs) {
        const sortedI = i.split("").sort().join("");
        if (!res[sortedI]) {
            res[sortedI] = [];
        }
        res[sortedI].push(i)
    }

    return Object.values(res);
    }
}
