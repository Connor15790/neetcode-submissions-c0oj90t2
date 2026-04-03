class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l, r = 0, len(numbers) - 1
        res = numbers[l] + numbers[r]

        while (res != target):
            if (res < target):
                l += 1
                res = numbers[l] + numbers[r]
            elif (res > target):
                r -= 1
                res = numbers[l] + numbers[r]

        return [l+1, r+1]