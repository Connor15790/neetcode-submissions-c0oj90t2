class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let L = 0;
        let R = matrix.length - 1;

        while (L <= R) {
            const mid = Math.floor((L + R) / 2);

            if (target < matrix[mid][0]) {
                R = mid - 1;
            } else if (target > matrix[mid].at(-1)) {
                L = mid + 1;
            } else {
                let l = 0;
                let r = matrix[mid].length - 1;

                while (l <= r) {
                    const m = Math.floor((l + r) / 2);

                    if (target < matrix[mid][m]) {
                        r = m - 1;
                    } else if (target > matrix[mid][m]) {
                        l = m + 1;
                    } else {
                        return true;
                    }
                }

                return false;
            }
        }

        return false;
    }
}
