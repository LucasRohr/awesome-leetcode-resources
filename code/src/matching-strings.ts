function matchingStrings(stringList: string[], queries: string[]): number[] {
  const resultsList: number[] = []

  queries.forEach((query) => {
    const stringListIncludesQuery: boolean = stringList.includes(query)

    if (stringListIncludesQuery) {
      const filteredList = stringList.filter((element) => element === query)

      resultsList.push(filteredList.length)
    } else {
      resultsList.push(0)
    }
  })

  return resultsList
}

function main() {
  let stringList: string[] = ['def', 'de', 'fgh']
  let queries: string[] = ['de', 'lmn', 'fgh']

  const result: number[] = matchingStrings(stringList, queries)

  console.log(result)
}

main()
