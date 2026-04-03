class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        return not list(dict.fromkeys(nums)) == nums