class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) < 2:
            return False

        stack = []
        hashMap = {
            ")": "(",
            "}": "{",
            "]": "["
        }

        for i in s:
            if i in hashMap:
                if stack and stack[-1] == hashMap[i]:
                    stack.pop()
                else:
                    stack.append(i)
            else:
                stack.append(i)

        if stack:
            return False

        return True
