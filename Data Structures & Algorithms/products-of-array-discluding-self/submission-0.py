class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = []
        prefix, postfix = [nums[0]], [nums[len(nums) - 1]]

        for i in range(1, len(nums)):
            prefix.append(nums[i] * prefix[-1])

        for i in range(len(nums)-2, -1, -1):
            postfix = [nums[i] * postfix[0]] + postfix

        for i in range(len(nums)):
            if (i == 0):
                res.append(1 * postfix[1])
            elif (i == len(nums) - 1):
                res.append(prefix[i - 1] * 1)
            else:
                res.append(prefix[i - 1] * postfix[i + 1])

        return res