function findMedianSortedArrays(nums1, nums2) {
    const mergedArrays = Array.prototype.concat(nums1, nums2);
    const sortedSet = [...mergedArrays].sort((a, b) => a - b);
    const isEven = sortedSet.length % 2 == 0;
    if (isEven) {
        const lowerIndex = sortedSet.length / 2 - 1;
        const upperIndex = sortedSet.length / 2;
        const median = (sortedSet[lowerIndex] + sortedSet[upperIndex]) / 2;
        return median;
    }
    const index = sortedSet.length / 2;
    const parsedIndex = Math.floor(index);
    return sortedSet[parsedIndex];
}
//# sourceMappingURL=findMedianSortedArrays.js.map