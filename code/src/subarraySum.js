//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} s
 * @returns {number[]}
 */

class Solution {
  //Function to find a continuous sub-array which adds up to a given number.
  subarraySum(list, listSize, sum) {
    const result = []
    const NO_SUBARRAY_VALUE = -1

    list.forEach((number, i) => {
      const remainingList = list.slice(i, list.length)
      let currentSum = 0

      remainingList.forEach((remainingNumber, j) => {
        currentSum += remainingNumber

        if (currentSum === sum && result.length === 0) {
          result.push(i + 1, j + 1 + (list.length - remainingList.length))
        }
      })
    })

    if (result.length === 0) {
      result.push(NO_SUBARRAY_VALUE)
    }

    return result
  }
}
