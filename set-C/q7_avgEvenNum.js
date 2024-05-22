function avgEvenNum(arr){
    let even = arr.filter(i => i%2===0)
    // return even
    let res = 0
    for (let i =0; i<even.length ;i++){
        res += even[i]
    }
    return res/even.length
}

let x = [2,45,6,7,4,10,12]
console.log(avgEvenNum(x))