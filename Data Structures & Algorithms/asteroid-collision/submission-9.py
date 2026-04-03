class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []

        for i in asteroids:
            while stack and stack[-1] > 0 and i < 0:
                diff = stack[-1] + i
                if diff < 0:
                    stack.pop()
                elif diff > 0:
                    i = 0
                else:
                    i = 0
                    stack.pop()

            if i:
                stack.append(i)

        return stack