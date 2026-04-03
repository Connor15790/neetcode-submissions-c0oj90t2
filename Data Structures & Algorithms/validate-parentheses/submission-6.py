class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        hashMap = {
            ")": "(",
            "}": "{",
            "]": "["
        }

        for i in s:
            if i in hashMap.values():
                stack.append(i)
            else:
                if stack and stack[-1] == hashMap[i]:
                    stack.pop()
                else:
                    return False

        return True if not stack else False