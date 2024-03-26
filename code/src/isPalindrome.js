/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  const filteredString = s
    .replace(/[^0-9a-zA-Z]/g, '')
    .toLowerCase()
    .trim()

  const reversedString = filteredString.split('').reverse().join('')
  return filteredString == reversedString
}
