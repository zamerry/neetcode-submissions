class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(s) {
          const map = new Map()

  for (const word of s) {
    const key = word.split("").sort().join("")

    if (!map.has(key)) {
      map.set(key, [])
    }

    map.get(key).push(word)
  }
  return Array.from(map.values())
    }
}
