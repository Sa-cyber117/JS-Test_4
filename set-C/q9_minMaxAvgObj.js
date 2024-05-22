function cObj(arr){
    // let myObj = {}
    let min = arr[0]
    let max = arr[0]
    let sumation = 0
    for (let i =0; i<arr.length ;i++){
        if (min > arr[i]){
            min = arr[i]
        }
        if (max < arr[i]){
            max = arr[i] 
        }
        sumation += arr[i] 
    }
    avg = sumation/arr.length
    myObj ={ max, min, avg}
    return myObj
}

let x = [2,45,6,7,4,10,12]
console.log(cObj(x))