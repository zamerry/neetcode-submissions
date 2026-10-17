class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        // по формуле Гаусса

        const n = nums.length

        const ideal_sum = (n * (n + 1)) / 2

        let actual_sum = 0

        for (let i = 0; i < n; i++) {
            actual_sum += nums[i]
        }
        return ideal_sum - actual_sum
    }
}
