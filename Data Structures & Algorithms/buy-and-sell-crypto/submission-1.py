class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        i, j = 0, 1
        profit = 0

        while j < len(prices):
            buy = prices[i]
            if prices[j] < prices[i]:
                buy = max(buy, prices[j])
                i = j
                j += 1
            else:
                sell = prices[j] - prices[i]
                profit = max(profit, sell)
                j += 1

        return profit
            