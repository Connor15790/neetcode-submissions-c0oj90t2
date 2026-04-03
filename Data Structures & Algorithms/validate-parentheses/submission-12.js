class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let hashMap = {
            ")": "(",
            "}": "{",
            "]": "["
        };

        for (let i of s) {
            if (i in hashMap) {
                if (stack.at(-1) === hashMap[i]) {
                    stack.pop();
                } else {
                    return false
                }
            } else {
                stack.push(i)
            }
        }

        if (stack.length) {
            return false
        } else {
            return true
        }
    }
}
