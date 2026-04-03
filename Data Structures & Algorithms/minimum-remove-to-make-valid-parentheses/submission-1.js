class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    minRemoveToMakeValid(s) {
        let count = 0;
        let stack = [];

        for (let i of s) {
            if (i === ")" && count > 0) {
                stack.push(i);
                count -= 1;
            } else if (i === "(") {
                stack.push(i);
                count += 1;
            } else if (i !== ")") {
                stack.push(i);
            }
        }

        let res = [];

        for (let i = stack.length - 1; i >= 0; i--) {
            if (stack[i] === "(" && count > 0) {
                count -= 1;
            } else {
                res.push(stack[i]);
            }
        }

        res.reverse();

        return res.join("");
    }
}
