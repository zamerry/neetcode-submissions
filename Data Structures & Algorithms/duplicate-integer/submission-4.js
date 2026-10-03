class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set()

        for (const k of nums) {
            if (seen.has(k)) {
                return true
            }
            seen.add(k)
        }
return false
    }
}
