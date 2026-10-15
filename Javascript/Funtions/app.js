


// let a = +prompt("a son kiriting :");
// let b = +prompt("b son kiriting :");

// function Math(a , b){
//     return a + b
// }


// let jami = Math(a , b);
// console.log("Hisob : " , jami)





// let a = +prompt("a son kiriting :");
// let b = +prompt("b son kiriting :");
// let amallar = prompt("Siz qanday ammal bajarmoqchisiz :")

// if(amallar == "+"){
//     let plus = amallar;
//     console.log(`Siz bu ${plus} bilan natijangiz : ${a + b}`)
// }else if(amallar == "-"){
//     let plus = amallar;
//     console.log(`Siz bu ${plus} bilan natijangiz : ${a - b}`)
// }else if(amallar == "*"){
//     let plus = amallar;
//     console.log(`Siz bu ${plus} bilan natijangiz : ${a * b}`)
// }else if(amallar == "/"){
//     let plus = amallar;
//     console.log(`Siz bu ${plus} bilan natijangiz : ${a / b}`)
// }else{
//     console.log('Sizda nima dur xatolik yuz bermoqda')
// }







// let narx = prompt("Siz olmoqchi bo'lgan maqsulotingizni narxi :");
// let chegirma = +prompt("Bizdan qancha chegirma talab qilyapsiz :");
// const jami = Number(narx - chegirma)


// function get_Market(price , piresent){
//      let hisoblash = BigInt(price - piresent);
//      return `Sizning umumiy maxsulotingiz soni ${hisoblash}`
// }

// var umumiy_Price = get_Market(narx , chegirma);
// console.log(umumiy_Price)







// 2 - vazifa 

// let a = +prompt('Sizda qancha $ mavjud :');

// function get_Money(price , now = 11.95504){
//     let prices = price * now;
//     return `Sizning uzbek pulingiz : ${prices} So'm`
// }

// let jami = get_Money(a)
// console.log(jami)







// let baxo = prompt('Siz nechi baxo oldingiz :');
 
// if(baxo == 5){
//     console.log("Siz 90 ball yig'dingiz !")
// }else if(baxo == 4){
//     console.log("Siz 80 ball yig'dingiz !")
// }else if(baxo == 3){
//     console.log("Siz 50 ball to'pladingiz !")
// }else if(baxo == 2){
//     console.log("Siz 30 ball to'pladingiz !")
// }else if(baxo == 1){
//     console.log("Kechirasiz siz imtihondan ketlashtirildiniz iltimos qayta topshiring")
// }else{
//     console.log("Sizda nimadur xatolik bermoqda iltimos menga bog'laning")
// }





let get_Cart = [
    {id : 1 , name : "Telfon" , rangi : "oq and black" , xotira : "1T" , price : 18.000000},
    {id : 2 , name : "Damas" , rangi : "oq and black" , xotira : "1T" , price : 187.000000},
    {id : 3 , name : "Laptop" , rangi : "oq and black" , xotira : "1T" , price : 130.000000},
    {id : 4 , name : "Quloqchin" , rangi : "oq and black" , xotira : "1T" , price : 18.000000},
    {id : 5 , name : "Mouse" , rangi : "oq and black" , xotira : "1T" , price : 180.000000},
    {id : 6 , name : "Klawyatura" , rangi : "oq and black" , xotira : "1T" , price : 188.000000},
];

console.log(get_Cart[0].id)

for(let i = 0; get_Cart[0].id <= 6 ; i++){
    console.log(isFinite)
}