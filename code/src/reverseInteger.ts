function reverseInteger(x: number): number {
  const NEGATIVE_SIGN = '-'
  const LOW_INT_INTERVAL = -(2 ** 31)
  const UPPER_INT_INTERVAL = 2 ** 31 - 1

  // Transform number in char list
  const stringNumber: string = x.toString()
  const stringNumberList: string[] = stringNumber.split('')

  // Check if value is negative, if so, adds - to the end of the list
  const isNegative: boolean = x < 0

  if (isNegative) {
    stringNumberList.push(NEGATIVE_SIGN)
  }

  // Reverses the list and join into a string
  stringNumberList.reverse()
  const reversedString: string = stringNumberList.join('')

  // Parses back to integer
  const numberResult = parseInt(reversedString)
  const isValidResult = numberResult >= LOW_INT_INTERVAL && numberResult <= UPPER_INT_INTERVAL

  return isValidResult ? parseInt(reversedString) : 0
}

function mainReverseInteger() {
  const response = reverseInteger(-123)
  console.log(response)
}

mainReverseInteger()
