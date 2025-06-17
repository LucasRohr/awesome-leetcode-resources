function nonDivisibleSubset(k: number, s: number[]): number {
    let subset: number[] = []
    let sumMap: Map<string, number> = new Map()
    let multipleKeysArray: string[] = []
    
    for(let i = 0; i < s.length; i++) {
        for(let j = i; j < s.length; j++) {
            sumMap.set(`${s[i]} + ${s[j]}`, s[i] + s[j])
        }
    }
    
    let mapKeys = Object.keys(sumMap)
    
    mapKeys.forEach(key => {
        if((sumMap.get(key) ?? 0) % k == 0) {
            multipleKeysArray.push(key)
        }
    })
    
    multipleKeysArray.forEach(key => {
        
    })
    
    return subset.length;
}