function permute(nums: number[]): number[][] {
  function backtrack(numbers: number[]) {
    const permutations: any = []

    if (numbers.length == 1) {
      return [numbers]
    }

    for (let i = 0; i < numbers.length; i++) {
      const current = numbers[i]
      const remaining = [...numbers].filter((num) => num != current)
      const currentPermutations = backtrack(remaining)

      for (let j = 0; j < currentPermutations.length; j++) {
        permutations.push([...currentPermutations[j], current])
      }
    }

    return permutations
  }

  return backtrack(nums)
}
