function largestRectangle(h: number[]): number {
  const sortedHeights = h.sort((a, b) => a - b)
  const productsList: number[] = []

  sortedHeights.forEach((height, index) => {
    productsList.push(height * (sortedHeights.length - index))
  })

  productsList.sort((a, b) => b - a)

  return productsList[0]
}
