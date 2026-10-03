class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ''

        for (let key of strs) {
            result += key.length + "#" + key
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = []
        let i = 0

        while (i < str.length) {
            let j = i
            while(str[j] !== "#") {
                j++
            }
            let len = parseInt(str.slice(i, j))

            i = j + 1

            let string = str.slice(i, i + len)
            result.push(string)

            i += len
        }
        return result
    }
}
