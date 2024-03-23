function reverseInteger(x) {
    const NEGATIVE_SIGN = '-';
    const LOW_INT_INTERVAL = -(2 ** 31);
    const UPPER_INT_INTERVAL = 2 ** 31 - 1;
    const stringNumber = x.toString();
    const stringNumberList = stringNumber.split('');
    const isNegative = x < 0;
    if (isNegative) {
        stringNumberList.push(NEGATIVE_SIGN);
    }
    stringNumberList.reverse();
    const reversedString = stringNumberList.join('');
    const numberResult = parseInt(reversedString);
    const isValidResult = numberResult >= LOW_INT_INTERVAL && numberResult <= UPPER_INT_INTERVAL;
    return isValidResult ? parseInt(reversedString) : 0;
}
function mainReverseInteger() {
    const response = reverseInteger(-123);
    console.log(response);
}
mainReverseInteger();
//# sourceMappingURL=reverseInteger.js.map