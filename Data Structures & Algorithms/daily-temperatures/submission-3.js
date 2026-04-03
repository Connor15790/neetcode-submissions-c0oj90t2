class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0);
        let stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length && stack.at(-1)[0] < temperatures[i]) {
                res[stack.at(-1)[1]] = i - stack.at(-1)[1];
                stack.pop();
            }

            stack.push([temperatures[i], i]);
        }

        return res;
    }
}
