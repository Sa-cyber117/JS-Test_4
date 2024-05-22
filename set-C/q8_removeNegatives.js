function remNeg(arr){
    let res = arr.filter(i => i>0)
    return res
}

let x = [2,45,-6,7,4,-10,12,-132]
console.log(remNeg(x))