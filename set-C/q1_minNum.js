function minNum(arr){
    res = arr[0]
    for (let i =0; i< arr.length; i++){
        if (res > arr[i]){
            res = arr[i]
        }
    }
    return res
}

let x = [2,45,6,7,4,10,12,-132]
console.log(minNum(x))