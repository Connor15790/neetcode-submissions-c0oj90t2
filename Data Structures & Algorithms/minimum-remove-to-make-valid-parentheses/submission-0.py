class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        count = 0
        res = []

        for i in s:
            if i == ")" and count > 0:
                res.append(i)
                count -= 1
            elif i == "(":
                res.append(i)
                count += 1
            elif i != ")":
                res.append(i)

        filtered = []

        for i in res[::-1]:
            if i == "(" and count > 0:
                count -= 1
            else:
                filtered.append(i)

        return "".join(filtered[::-1])
