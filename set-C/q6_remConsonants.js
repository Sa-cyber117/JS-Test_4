function remCons(str){
    let v = "aeiou"
    let res = ""
    for (let i=0 ; i<str.length ;i++){
        if (v.includes(str[i])){
            res += str[i]
        }
    }
    return res
}

let x = "Hello world"
console.log(remCons(x))