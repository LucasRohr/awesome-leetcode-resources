/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  const charMap = {}

  chars.forEach((char) => {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1
  })

  const newCharsString = Object.keys(charMap).reduce((accum, current) => {
    if (charMap[current] > 1) {
      return accum + current + charMap[current]
    }

    return accum + current
  }, '')

  chars.forEach((_, i) => {
    chars[i] = newCharsString[i]
  })

  return newCharsString.length
}
