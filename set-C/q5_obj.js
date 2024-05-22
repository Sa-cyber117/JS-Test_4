function turnObj(arr){
    let obj ={}
    for (let i = 0; i<arr.length ;i++){
        obj[arr[i]] = arr[i].length
    }
    return obj
}


let x = ["abc", "lompk", 'eoxp']
console.log(turnObj(x))