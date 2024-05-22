function sumEven(arr){
    // i = 0
    res = arr.reduce((i,num) => num%2 === 0 ? i+num : i,0)
    return res
}

let x = [2,45,6,7,4,10,12]
console.log(sumEven(x))