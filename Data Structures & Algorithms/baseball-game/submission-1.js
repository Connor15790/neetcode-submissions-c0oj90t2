class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];

        for (let i of operations) {
            if (i === "+") {
                stack.push(stack.at(-1) + stack.at(-2));
            } else if (i === "D") {
                stack.push(stack.at(-1) * 2);
            } else if (i === "C") {
                stack.pop()
            } else {
                stack.push(parseInt(i));
            }
        }

        return stack.reduce((acc, val) => acc + val, 0);
    }
}
