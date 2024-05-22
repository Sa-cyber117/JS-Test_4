function isUnique(arr){
    // let res = arr.filter((i, j) => arr.indexof(i) === arr.indexOf(j))
    // return res
    // let temp = arr
    for (let i =0; i<arr.length ;i++){
        for(let j = i+1; j<arr.length; j++){
            if (arr[i] === arr[j]){
                return false
            }
        }
    }
    return true
}

let x = [2,45,6,7,4,10,12,13]
console.log(isUnique(x))