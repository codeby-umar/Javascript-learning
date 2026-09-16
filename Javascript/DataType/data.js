// Javascriptda asosiy 8 ta malumot turlari mavjud .

// 1 . String - yani matnlar bilan ishlaydi va matnli malumot hisoblanadi 
// 2 . Number - yani raqamli malumot turi hisoblanadi 
// 3 . BigINt - yani ixtiyoriy aniqlikka ega bolgan son , yani sonlarga har qoshilsa va sonlar katta bolib qoshilda.
// 4 . Boolen - Mantiqiy malumot turi xisoblanaib , ikki qiymatda istalgan birida ishlaydi bular true yoki false
// 5 . Undefined - O'zgaruvchisi initsializatsiya qilinmagan ma'lumotlar
// turi yani biron bir o'zgaruvchiga ichida malumot yoq yani bosh toplam haqida malumot turi hisoblanadi
// 6 . Null - bu yani malumot turi hisoblan malumot yoqligi yani hech qanday malumot yoligi bildiradi 
// 7 . Symbol - Nusxalari noyob va o'zgarmas bo'lgan ma'lumotlar turi.
// 8 . Object - Malumot turi xisoblanib xususyati va qiyymati bor malumot turi hisoblanadi yani key : value


// 1 . string

// let Fullname = 'Turg\'unboyov Muhammad Umar';
// let name = 'Muhammad Umar';
// console.log(`Bu malumot turi (${typeof name}) hisoblanadi`)
// console.log(Fullname)

// console.log('.....................................')

// var news = "Bugun o'zbekistonda katta ozgarishlar yol bermoqda bizni yurtimiszdan juda katta dasturchi yetishim kelmoda \
// uni ismi : Muhammad Umar Turgunboyov hisoblanadi ";
// console.log(news)

// console.log('------------------------------------------------------------------')

// let text = 34;

// if(typeof text == 'string'){
//     console.log(`Bu malumot turi (${ typeof text}) ma'lumot turi  hisoblanadi`)
// }else if(typeof text ==  'number'){
//     console.log(`Bu malumot turi (${typeof text}) ma'lumot turi hisoblanadi`)
// }else if(typeof text == 'boolean'){
//     console.log(`Bu malumot turi (${typeof text}) ma'lumot turi hisoblanadi`)
// }else if( typeof text == 'object'){
//     console.log(`Bu malumot turi (${typeof text}) ma'lumot turi hisoblanadi`)
// }else {
//     console.log("Siz logikanisz nimadur xatolik yuz berdi")
// }

// console.log('------------------------------------------------------------------')



// let login = prompt('Sizning ismingiz kiriting :');
// let password = prompt('Sizning familyaniszni kiriting :')
// var fullData = `Sizning ismingiz : ${login} , Sizning familyanisiz : ${password}`;
// console.log(fullData)



let JsonData = {
    login : 'codingbyumar@gmail.com',
    password : 1234,
    fullData : {
      name : "Muhammad Umar",
      LastName : "Turg'unbnoyov",
      fullName : "Turg'unboyov Muhammad Umar",
      age : 18,
      interest : ['Sport' , 'Game' , 'Coding' , 'Fitness']
    }
}


// let talaba_login = prompt('Sizning loginingizni kiriting :');
// let talaba_password = prompt('Sizning passwordiningz kiriting :')

// let check1 = JsonData.login;
// let check2= JsonData.password;

// console.log(check2.length)
// if(check2.length == '3'){
//     console.log('Siz togri pasword kiritdingiz !')
// }else if(check2.length <= 3){
//     alert(`Kechirasiz maksimum 6 tadan kam bo'lmasligi kerak , sizda : ${check2.length} !!`)
// }else{
//     console.log('Sizda nimalik xatolik bolmoqda')
// }


// if(talaba_login == check1 && talaba_password == check2){
//     console.log(`Siz bizning website xush kelibsiz . Sizning loginingiz to'gri !`)
//     alert(`Siz bizning website xush kelibsiz || Sining loginingiz : ${check1} , Sizning passwordingiz : ${check2}`)
// }else {
//     alert('Sizning malumotlariningizda nimadu xatolik yuz bermoqda')
// }






console.log('================================================================================')
console.log('Sizning orderingiz yani yon kashaloginingiz')
console.log('================================================================================')

let name = prompt("Isminingizni kiritiring :");
let aga = prompt("Yoshingizni kirititing :")
let order = prompt("Sizning hamyonigizda qancha naq pul bor : ");

Toliq_Information = `Sizning Ismingiz : ${name} , Sizning yoshingiz : ${aga} , Sizning hamyoningizda : ${order} ming naq pulingiz bor`

console.log('............................................................')
console.log(Toliq_Information)
console.log('............................................................');

console.log('================================================================================')

let market = ['Olma' , 'Banan' , 'Nok' , 'Uzum' , 'Orik' , 'Shaftoli'];
let money = [5 , 24 , 9 ,10 , 23 , 12];
console.log(`Bizning bor dokondagi mevalar : ${market} `)


let meva_Tanlang = prompt('Siz qanday meva harid qilmoqchisiz :')

if(meva_Tanlang == market[0].toLowerCase()){
    let narx = order - money[0]
    alert(`Siz ${meva_Tanlang} sotib oldingiz va Sizda qolgan pullingiz : ${narx} `)
}else if(meva_Tanlang == market[1].toLowerCase()){
    let narx = order - money[1]
    alert(`Siz ${meva_Tanlang} sotib oldingiz va Sizda qolgan pullingiz : ${narx} `)
}else if(meva_Tanlang == market[2].toLowerCase()){
    let narx = order - money[2]
    alert(`Siz ${meva_Tanlang} sotib oldingiz va Sizda qolgan pullingiz : ${narx} `)
}else if(meva_Tanlang == market[3].toLowerCase()){
    let narx = order - money[3]
    alert(`Siz ${meva_Tanlang} sotib oldingiz va Sizda qolgan pullingiz : ${narx} `)
}else if(meva_Tanlang == market[4].toLowerCase()){
    let narx = order - money[4]
    alert(`Siz ${meva_Tanlang} sotib oldingiz va Sizda qolgan pullingiz : ${narx} `)
}else if(meva_Tanlang == market[5].toLowerCase()){
    let narx = order - money[5]
    alert(`Siz ${meva_Tanlang} sotib oldingiz va Sizda qolgan pullingiz : ${narx} `)
}else{
   console.log('Sizni meva sotib olgani pulingiz yetmaydi !!!')
}







