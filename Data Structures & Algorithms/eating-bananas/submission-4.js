class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);

        let res;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            
            let consumeTime = 0;
            for (let i = 0; i < piles.length; i++) {
                consumeTime += Math.ceil(piles[i] / m);
            }

            if (consumeTime > h) {
                l = m + 1;
            } else {
                res = !res ? m : Math.min(res, m);
                r = m - 1;
            }
        }

        return res;
    }
}
