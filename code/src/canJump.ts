function canJump(nums: number[]): boolean {
  let lastJumpIndex = 0
  let canJumpToLast = false

  nums.forEach((jump, i) => {
    let j = i
    let jumpCopy = jump

    while (j < nums.length - 1 && jumpCopy != 0) {
      j += jumpCopy
      jumpCopy = nums[j]
      lastJumpIndex = j
    }

    if (lastJumpIndex >= nums.length - 1) {
      canJumpToLast = true
    }
  })

  return canJumpToLast
}

function mainCanJump() {
  const testList = [2, 3, 1, 1, 4]
  const result = canJump(testList)
  console.log(result)
}

mainCanJump()
