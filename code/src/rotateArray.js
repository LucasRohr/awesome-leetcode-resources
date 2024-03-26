/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function rotate(nums, k) {
  const numbers = [...nums]
  const rotationNumbers = numbers.splice(0, numbers.length - k)
  numbers.push(...rotationNumbers)

  numbers.forEach((number, i) => {
    nums[i] = number
  })
}

var rotateRefactor = function (nums, k) {
  while (nums.length <= k) {
    k = k - nums.length
  }
  const temp = nums.splice(0, nums.length - k)
  nums.push(...temp)
}
