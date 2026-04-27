class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for (let i of tokens) {
            if (i === "+") {
                const sum = Number(stack.at(-2)) + Number(stack.at(-1));
                stack.pop();
                stack.pop();
                stack.push(sum);
            } else if (i === "-") {
                const diff = Number(stack.at(-2)) - Number(stack.at(-1));
                stack.pop();
                stack.pop();
                stack.push(diff);
            } else if (i === "*") {
                const product = Number(stack.at(-2)) * Number(stack.at(-1));
                stack.pop();
                stack.pop();
                stack.push(product);
            } else if (i === "/") {
                const quotient = Math.trunc(Number(stack.at(-2)) / Number(stack.at(-1)));
                stack.pop();
                stack.pop();
                stack.push(quotient);
            } else {
                stack.push(i);
            }
        }

        return stack[0];
    }
}
