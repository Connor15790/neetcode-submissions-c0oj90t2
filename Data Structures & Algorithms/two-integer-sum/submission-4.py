class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        matchMap = {}

        for i, j in enumerate(nums):
            matchedNum = target - j
            if matchedNum not in matchMap:
                matchMap[j] = i
            else:
                return [matchMap[matchedNum], i]