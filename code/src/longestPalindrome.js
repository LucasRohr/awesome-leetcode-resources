class Solution {
  longestPalin(text) {
    const palindromes = []

    function aux(i) {
      for (let j = i; j <= text.length; j++) {
        const substring = text.substring(i, j)
        const reverseSubstring = substring.split('').reverse().join('')

        if (substring == reverseSubstring) {
          palindromes.push(substring)
        }

        if (i == text.length - 1) {
          return
        } else {
          aux(i + 1)
        }
      }
    }

    aux(0)

    palindromes.sort((a, b) => b.length - a.length)

    return palindromes[0]
  }

  longestPalinDoubleLoop(text) {
    const palindromes = []
    const textList = text.split('')

    textList.forEach((_, i) => {
      for (let j = i; j <= text.length; j++) {
        const substring = text.substring(i, j)
        const reverseSubstring = substring.split('').reverse().join('')

        if (substring == reverseSubstring) {
          palindromes.push(substring)
        }
      }
    })

    palindromes.sort((a, b) => b.length - a.length)

    return palindromes[0]
  }
}
