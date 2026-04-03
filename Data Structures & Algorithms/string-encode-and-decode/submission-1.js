class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";

        for (let i of strs) {
            res += String(i.length) + "#" + i;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let stringLength = "";
        let i = 0;

        while (i < str.length) {
            if (str[i] !== "#") {
                stringLength = stringLength + str[i];
                i++
            } else {
                res.push(str.slice(i + 1, i + 1 + Number(stringLength)));
                i = i + 1 + Number(stringLength);
                stringLength = ""
            }
        }

        return res;
    }
}







