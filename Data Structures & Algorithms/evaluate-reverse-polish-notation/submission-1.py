import operator

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        operatorMap = {
            "+": operator.add,
            "-": operator.sub,
            "*": operator.mul,
            "/": operator.truediv
        }

        for i in tokens:
            if i not in operatorMap:
                stack.append(i)
            else:
                b = stack.pop()
                a = stack.pop()
                stack.append(operatorMap[i](int(a), int(b)))

        return int(stack[0])