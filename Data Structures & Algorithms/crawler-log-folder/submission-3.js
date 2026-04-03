class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        let stack = [];

        for (let i of logs) {
            if (i === "../") {
                if (stack.length) {
                    stack.pop()
                } else {
                    continue;
                }
            } else if (i === "./") {
                continue;
            } else {
                stack.push(i);
            }
        }

        return stack.length
    }
}
