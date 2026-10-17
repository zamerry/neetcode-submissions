class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Map()

        for (const key of nums) {
            if (seen.has(key)) {
                return true
            }
            seen.set(key)
        }
        return false
    }
}
