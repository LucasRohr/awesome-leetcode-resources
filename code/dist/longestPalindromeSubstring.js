function longestPalindrome(inputString) {
    const combinations = [];
    const stringChars = inputString.split('');
    let filteredCombinations = [];
    let greatestPalindromeLength = 0;
    stringChars.forEach((_, i) => {
        combinations.push(inputString.substring(0, i + 1));
        combinations.push(inputString.substring(i, inputString.length - i));
    });
    filteredCombinations = combinations.filter((combination) => {
        const stringList = combination.split('');
        const reversedCombination = stringList.reverse().join('');
        const isPalindrome = combination === reversedCombination;
        if (isPalindrome && combination.length > greatestPalindromeLength) {
            greatestPalindromeLength = combination.length;
        }
        return isPalindrome;
    });
    filteredCombinations = filteredCombinations.filter((combination) => {
        return combination.length === greatestPalindromeLength;
    });
    return filteredCombinations[0];
}
//# sourceMappingURL=longestPalindromeSubstring.js.map