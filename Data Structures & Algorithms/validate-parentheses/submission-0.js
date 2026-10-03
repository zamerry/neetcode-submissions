class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeToOpen = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        for (const char of s) {
            if (char in closeToOpen) {
                let lastOpen = stack.pop();

                if (lastOpen !== closeToOpen[char]) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }
        return stack.length === 0;
    }
}
