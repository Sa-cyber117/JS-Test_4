function returnOdd(arr){
    let res = arr.filter(nums => nums%2 !==0 )
    return res
}

let x = [2,45,6,7,4,10,12,-132,1]
console.log(returnOdd(x))