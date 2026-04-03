class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        for i in range(len(s2)):
            for j in range(i, len(s2)):
                if "".join(sorted(s1)) == "".join(sorted(s2[i:j+1])):
                    return True

        return False