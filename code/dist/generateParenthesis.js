function generateParenthesis(n) {
    const result = [];
    function backtrack(str, open, close, max) {
        if (str.length === max * 2) {
            result.push(str);
            return;
        }
        if (open < max) {
            backtrack(str + '(', open + 1, close, max);
        }
        if (close < open) {
            backtrack(str + ')', open, close + 1, max);
        }
    }
    backtrack('', 0, 0, n);
    return result;
}
//# sourceMappingURL=generateParenthesis.js.map