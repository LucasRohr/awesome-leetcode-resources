function largestRectangle(h) {
    const sortedHeights = h.sort((a, b) => a - b);
    const productsList = [];
    sortedHeights.forEach((height, index) => {
        productsList.push(height * (sortedHeights.length - index));
    });
    productsList.sort((a, b) => b - a);
    return productsList[0];
}
//# sourceMappingURL=largestRectangle.js.map