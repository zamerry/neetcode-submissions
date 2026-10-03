class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const word = s
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")

        const reversed = word.split("").reverse("").join("")

        return word === reversed
    }
}
