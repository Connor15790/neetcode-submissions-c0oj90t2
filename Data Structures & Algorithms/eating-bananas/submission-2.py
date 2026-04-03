class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l, r = 1, max(piles)
        res = r

        while l <= r:
            m = l + (r - l) // 2
            hours = sum(
                1 if x < m else (x + m - 1) // m for x in piles
            )

            if hours > h:
                l = m + 1
            elif hours <= h:
                res = min(res, m)
                r = m - 1

        return res
            