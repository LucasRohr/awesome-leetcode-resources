function generateParenthesis(n: number): string[] {
  const result: string[] = []

  function backtrack(str: string, open: number, close: number, max: number): void {
    // Compares if the string of parenthesis is already completed, max * 2 because it opens AND closes paranthesis
    if (str.length === max * 2) {
      result.push(str)
      return
    }

    // If you have to still open a parenthesis, add the open one and increase the counter
    if (open < max) {
      backtrack(str + '(', open + 1, close, max)
    }

    // While you have more opened parenthesis than closed ones, after opening them all, close them
    if (close < open) {
      backtrack(str + ')', open, close + 1, max)
    }
  }

  backtrack('', 0, 0, n)
  return result
}
