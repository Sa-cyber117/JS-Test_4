function findDiff(arr){
    let min = arr[0]
    let max = arr[0]
    for (let i =0; i<arr.length ;i++){
        if (min > arr[i]){
            min = arr[i]
        }
        if (max < arr[i]){
            max = arr[i] 
        }
    }
    let res = max-min
    return res
}

let x = [2,45,6,7,4,10,12,32]   // 43
console.log(findDiff(x))