function canJump(nums) {
    const lastElement = nums[nums.length - 1];
    let lastJump = nums[0];
    let canJumpToLast = false;
    nums.forEach((jump, i) => {
        let j = i;
        let jumpCopy = jump;
        while (j < nums.length - 1 && jumpCopy != 0) {
            j += jumpCopy;
            jumpCopy = nums[j];
            lastJump = jumpCopy;
            console.log(`jumpCopy = ${jumpCopy}`);
        }
        if (lastJump == lastElement) {
            canJumpToLast = true;
        }
    });
    return canJumpToLast;
}
function mainCanJump() {
    const testList = [2, 3, 1, 1, 4];
    const result = canJump(testList);
    console.log(result);
}
mainCanJump();
//# sourceMappingURL=canJump.js.map