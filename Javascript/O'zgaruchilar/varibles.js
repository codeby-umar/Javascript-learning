// O'zgaruvchilar yani (Variballar) - bu biron bir malumotni ozini ichida saqlab turish vazifasini bajaradi .
// Blok nima ?
// Blok ochilish va yopilish qavslari orasidagi har qanday bo'shliqni anglatadi.

// let - bu ozgaruvchi hisoblanib biz buni har qayerda chaqirishimisz va boshqa o'zgaruchiga biriktirishimisz mumkin .

let FirstName = 'Muhammmad Umar';
let LastName = "Turg'unboyov"
let age = 18;
let interest = 'Programmer';
console.log('------------------------------------')
console.log(`Sizning ismingiz : ${FirstName}`);
console.log(`Sizning familyangiz : ${LastName}`);
console.log(`Sizning yoshingiz : ${age}`);
console.log(`Sizning qiziqishingiz : ${interest}`);
console.log('------------------------------------')


let Fullname = FirstName + " " + LastName;
console.log(Fullname)

let Fullnames = `${FirstName} ${LastName}`;
console.log(Fullnames)

let data = {
    name : FirstName,
    last : LastName,
    yosh : age,
    qiziq : interest
}
console.log(data.name)


// var - bu o'zgaruvchi hisolblanib , glabal miqiyosdagi ozgaruchi hisoblanadi , buni ham qayta ozgartirish va mumkin

console.log('....................................................................................')

var kunuz = "Bugun yurtimiszda turli javhalarda ozini korsatib bormoqda ..."
console.log(kunuz)

var talaba_FirstName = 'Samanjon'
var talaba_LastName = 'Shukurullayev'
var talaba_Yoshi = 20;
var talaba_Fulldata = `Talabaning ismi : ${talaba_FirstName} , Talabaning familyasi : ${talaba_LastName} , talabaning yoshi : ${talaba_Yoshi}`
console.log(talaba_Fulldata)


// const - bu ozgarmas ozgaruvchi hisoblanadi yani boshqa ozgaruvchiga biriktirib qayta foidalana olmaymisz

const uz = "O'zbekiston Respublikasi quroli kuchlar vazirligi"
console.log(uz)

// const uz = "dsdsds"
// console.log(uz).  yani const O'zgarmas constatanta hisoblanadi
