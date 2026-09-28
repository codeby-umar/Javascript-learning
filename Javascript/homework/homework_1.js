// vazifa 1 

let isInput = +prompt('Siz bu yil nechta serial kor\'rdingiz : ');
let isName = prompt('Sizning ko\'rgan filim nomi');
let Status = +prompt('Qanchalik sizga yoqdi film :')



let AllserialStaion = {
    id : 1,
    name : isName,
    filmNumber : isInput,
    status : Status,
    start : false,
    option : "Hello world"
}
console.log(AllserialStaion)

