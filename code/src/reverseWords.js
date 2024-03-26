/**
 * @param {string} s
 * @return {string}
 */

function reverseWords(s) {
  const trimmedString = s.replace(/\s+g/, ' ').trim()
  return trimmedString.split(' ').reverse().join(' ')
}
