class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const seen = new Map();
        for (let key of nums) {
            let currentCount = seen.get(key) || 0;
            seen.set(key, currentCount + 1);
        }

        const sortedArray = [...seen].sort((a, b) => b[1] - a[1]);

        return sortedArray.slice(0, k).map((p) => p[0]);
    }
}
