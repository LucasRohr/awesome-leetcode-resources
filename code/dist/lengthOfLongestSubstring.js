function lengthOfLongestSubstring(text) {
    let maxLength = 0;
    let substringText = '';
    const textList = text.split('');
    if (text.length === 0) {
        return 0;
    }
    textList.forEach((char) => {
        if (!substringText.includes(char)) {
            substringText = substringText.concat(char);
        }
        else {
            substringText = char;
        }
        if (substringText.length > maxLength) {
            maxLength = substringText.length;
        }
    });
    return maxLength;
}
function mainLengthOfLongestSubstring() {
    const response = lengthOfLongestSubstring('abcabcbb');
    console.log(response);
}
mainLengthOfLongestSubstring();
//# sourceMappingURL=lengthOfLongestSubstring.js.map