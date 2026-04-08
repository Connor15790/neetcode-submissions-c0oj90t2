class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";

        for (let i of strs) {
            res += i.length.toString() + "#" + i
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let nextStringLength = "";

        let i = 0;
        while (i < str.length) {
            if (str[i] !== "#") {
                nextStringLength += str[i]
                i++;
            } else {
                res.push(str.slice(i+1, Number(nextStringLength) + i + 1));
                i += Number(nextStringLength) + 1;
                nextStringLength = "";
            }
        }

        return res;
    }
}
