function increaseOne(arr){
    let res = arr.map(i=> i+1)
    return res
}

let x = [2,45,6,7,4,10,12,-132]
console.log(increaseOne(x))