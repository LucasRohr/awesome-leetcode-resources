function matchingStrings(stringList, queries) {
    const resultsList = [];
    queries.forEach((query) => {
        const stringListIncludesQuery = stringList.includes(query);
        if (stringListIncludesQuery) {
            const filteredList = stringList.filter((element) => element === query);
            resultsList.push(filteredList.length);
        }
        else {
            resultsList.push(0);
        }
    });
    return resultsList;
}
function mainMatchingStrings() {
    let stringList = ['def', 'de', 'fgh'];
    let queries = ['de', 'lmn', 'fgh'];
    const result = matchingStrings(stringList, queries);
    console.log(result);
}
mainMatchingStrings();
//# sourceMappingURL=matching-strings.js.map