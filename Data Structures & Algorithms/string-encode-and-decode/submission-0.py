class Solution:

    def encode(self, strs: List[str]) -> str:
        res = ""

        for i in strs:
            res += str(len(i)) + "#" + i

        return res

    def decode(self, s: str) -> List[str]:
        res = []
        i = 0
        nextStringLength = ""

        while (i < len(s)):
            if (s[i] != "#"):
                nextStringLength += s[i]
                i += 1
                continue
            else:
                res.append(s[i+1: i+int(nextStringLength)+1])
                i = i+int(nextStringLength)+1
                nextStringLength = ""
                continue

        return res

