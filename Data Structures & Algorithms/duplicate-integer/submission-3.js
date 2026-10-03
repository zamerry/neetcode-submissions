class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set()

        for (const key of nums) {
            if (seen.has(key)) {
                return true
            }
            seen.add(key)
        }
        return false

    }
}
