function remExtras(str, words){
    let res = words.filter(words => str.includes(words))
    // let res = str.filter(words => str.includes(words))
    return res
}

const stringss = "hello world. what are you doing"
const words = ['hello', 'world','what']
console.log(remExtras(stringss, words))