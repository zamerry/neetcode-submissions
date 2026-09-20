class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let idealSum = 0
        let actualSum = 0

        for (let i = 0; i <= nums.length; i++) {
            idealSum += i
        }

        for (let i = 0; i < nums.length; i++) {
            actualSum += nums[i]
        }
        return idealSum - actualSum
    }
}
