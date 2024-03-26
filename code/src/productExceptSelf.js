/**
 * @param {number[]} nums
 * @return {number[]}
 */

function productExceptSelf(nums) {
  const productsList = []

  nums.forEach((_, i) => {
    const numsCopy = [...nums]
    numsCopy.splice(i, 1)

    const product = numsCopy.reduce((accum, current) => accum * current, 1)

    productsList[i] = product
  })

  return productsList
}
