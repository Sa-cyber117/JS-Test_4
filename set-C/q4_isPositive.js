function isPositive(arr){
    for (let i = 0; i<arr.length; i++){
        if(arr[i] < 0){
            return false
        }
        
        
    }
    return true
}

let x = [2,45,6,7,4,10,12,132]
console.log(isPositive(x))