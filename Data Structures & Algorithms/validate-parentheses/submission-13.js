class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
        isValid(s) {
            let stack = [];
            let bracketMap = {
                ")": "(",
                "}": "{",
                "]": "["
            };

            for (let i of s) {
                if (i in bracketMap) {
                    if (stack.at(-1) === bracketMap[i]) {
                        stack.pop();
                    } else {
                        return false;
                    }
                } else {
                    stack.push(i);
                }
            }

            return stack.length === 0;
        }
}
