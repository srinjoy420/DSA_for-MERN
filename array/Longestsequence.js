function longestConsecutive(nums) {
    let numSet = new Set(nums)        // store all numbers
    let longest = 0

    for (let num of numSet) {
        if (!numSet.has(num - 1)) {   // only start counting from sequence start
            let count = 1

            while (numSet.has(num + count)) {  // keep counting upward
                count++
            }

            longest = Math.max(longest, count)
        }
    }

    return longest
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])) // 4  → [1,2,3,4]
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])) // 9