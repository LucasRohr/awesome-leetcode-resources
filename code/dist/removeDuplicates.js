function removeDuplicates(nums) {
    let resultLength = 0;
    function backtrack(numbers, currentNum) {
        if (numbers.length == 0) {
            return resultLength;
        }
        const setList = new Set(numbers);
        const filtered = numbers.filter((num) => num == [...setList][currentNum]);
        let filteredSize = filtered.length;
        if (filteredSize > 2) {
            while (filteredSize > 2) {
                numbers.splice(numbers.indexOf(filtered[filteredSize - 1], 1));
                filteredSize--;
            }
        }
        resultLength += filteredSize;
        backtrack(numbers, currentNum + 1);
    }
    backtrack(nums, 0);
    return resultLength;
}
//# sourceMappingURL=removeDuplicates.js.map