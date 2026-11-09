let javascrit =
  "JavaScript-da o‘zgaruvchilar nima? JavaScript-da o‘zgaruvchilar — bu ma’lumotlarni saqlash uchun ishlatiladigan, nomlangan idishlardir. Ularni ustiga yorliq yopishtirilgan qutilar deb tasavvur qiling: yorliq — bu o‘zgaruvchining nomi, quti ichiga solgan narsangiz esa — ma’lumotdir.";
console.log(javascrit);

// 2 - hil kamentarya olish usuli bor birinchi usul bu

// - bu butun turgan matn yoki elementni ozini kamentarya qiladi
// */ */ - bu esa qatorlari bilan va ochiq joylari bilan umumiy block oladi

//title = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis id vel corrupti. Nam voluptas error reiciendis vel hic vero doloribus earum accusamus! Esse iure sapiente suscipit magnam odit. Laborum, atque!";
// console.log(title);

/*Lorem ipsum dolor sit amet consectetur adipisicing eli
dkoedket. Blanditiis id vel corrupti.*/

// let name , age , title , job;
// console.log(name)

// name = "Muhammad Umar";
// age = 18;
// title = "I am muhammad Umar";
// job = "Frontend developer";

// let jami = `HI : ${name} , Age : ${age} , Siz haqinigizda : ${title} , sizning kasbinigiz : ${job}`;
// console.log(jami)

// var kalom = "Hello world" , salom = "dunyoda meni isim";
// console.log(kalom);
// console.log(salom);

// let jami = Number(a = 0 , b = 8 , c = 8);
// console.log(typeof c);

// let tushunish = String(a = 'Salom dunyo');
// let tushunish1 = Number(note = 300 , note2 = 400);
// console.log(tushunish);
// console.log(tushunish1)

// let cars_Name = ['Cobalt' , 'damas' , 'matiz' , 'tico'];
// console.log(cars_Name);

// let about = {
//     name : "Muhammad Umar",
//     age : 18,
//     job : "Frontend developer"
// }
// console.log(about)

// 1 - topshiriq

let FullName = String((ism = "Muhammad Umar"), (familya = "Turg'unboyov"));
console.log(familya, ism);

// 2 - topshiriq

let type = "What's up bro";
let age = 18;
let bool = true;

console.log(typeof type, typeof age, typeof bool);

// 3 - topshiriq

let ages = 18;
console.log("eski yoshingiz : ", ages);
console.log("Oradan bir yil otdi va sening yoshing");
ages = 19;
console.log(ages);

// 4 - topshiriq

let prodectName = "Olam";
let productProce = 20000;
let prodectCound = 6;
let description =
  "Ollma juda yaxshi meva va insonni juda kayfiyatini ko'tarib yuboradi va emotionini ham judaa foidali";
console.log(
  `Sizning yoqtirgan olmanignz : ${prodectName} , Va u menvani narxi : ${productProce} , Meva haqida : ${description}`,
);

// 5 - topshiriq

const Descrition_Student = {
  firstName: "Muhaammad Umar".toLocaleUpperCase(),
  LastName: "Turg'unboyov".toLocaleUpperCase(),
  yosh: 18,
  universitet: "Andijon davlat texnik instutituti",
  isStudent: true,
  isActive: true,
};

console.log(Descrition_Student);

// 6 - topshiriq

// let InputSaved = +prompt('Qancah olma oldingiz :');
// let InputPrice = +prompt('Olmaingiz Narxi : ');
// const olma_Star = 30;
// const fullCound = InputPrice + InputSaved + olma_Star;
// console.log("Sizning jami element raqamlar yig'indisi :" , fullCound );

// 7 - topshiriq
// type conversion - yani bitta malumot turini avtomatik o'zgarishi boshqa malumot turiga

let boom = "10" * 2;
console.log(typeof boom);

let isBetta = "30" * "30";
console.log(isBetta);

// 8 - topshiriq

let Olamazor_Odamlar = {
  ism: "umar".toUpperCase(),
  age: 18,
  email: "umar@gmail.com",
  phone: "+998507121208",
  isVerifi: true,
  skills: ["Html", "Css", "Javascript", "React"],
};
console.log(Olamazor_Odamlar);
console.log(typeof Olamazor_Odamlar.age);
console.log(typeof Olamazor_Odamlar.skills);
console.log(typeof Olamazor_Odamlar.isVerifi);

let hajm = "300" * 2; // Bu misol type converstionga misol yani bitta maumot turidan keyingisiga otishi
console.log(typeof hajm);

// let InputAge = +prompt('Sizning yoshingiz nechida :' , 'age :');  // mana bu ham type convertionga miol bo'la oladi
// let newYear = '2026';
// let jami = newYear - InputAge;
// console.log(`Siz hozirgina yosh malumotingizni berudingiz biz yilingizni aniqladik ${jami} yil ekansiz`);
// let errorYear = confirm(`Siz rostan ham ${jami} yearmisiz`);
// console.log(errorYear);

// if(errorYear == true){
//     let overYear = `Siz rostdan ham year togri ekan ${jami} yil`;
//     console.log(overYear)
// }else{
//     let overYear = `Siz yoshingizni to'gri kiritilmaganmi ${jami} year`;
//     console.log(overYear)
// }

console.log(
  "------------------------------------------------------------------",
);

/* Bu hozir mini cart ilova uchun kichkina bo'lsada mini project qilmoqchiman qani kettik   */

let cartNumber = prompt(
  "Siz bu yerga 16 ta raqamli karta raqam kiriting :",
  "9668 1202 0330 2340",
);
let tartiblash = cartNumber.replaceAll(" ", "");
let moneyCound = 0;
// let overInfoNumber = ['9668 1202 0330 2340' , '9668 2230 0330 2300' , '9668 1202 0330 0920' , '9668 2902 0330 2107'] ;

// for(let cardView of overInfoNumber){
//    let rotationalMotion = cardView.replaceAll(' ' , '');
     
//      if(rotationalMotion == overInfoNumber){
//         console.log(`Sizning karta raqamingiz malumotlar azamiszda bor ${overInfoNumber}`)
//      }else{
//         console.log(`Sizning kartaning bizni malumotlar bazmiszda yoq ${overInfoNumber}`)
//      }
 




if (tartiblash.length == 16) {
  let checkNumber = `Biz sizning malumotingizni tekshirdik karta raqmingiz tog\'ri : ${tartiblash}`;
  alert(checkNumber);
  let checkConfirm = confirm("Siz bizning bankdan foidalanaiszmi :");
  console.log(checkConfirm);
  console.log(`karta hisobingizdagi hozirgi pul : ${moneyCound}`);

  if (checkConfirm == true) {
    let getCredit = +prompt("Qancha kiridit olasiz :");
    var getMath = moneyCound + getCredit;
    let newcardNumber = `Sizning hisob karta raqamingizda : ${getMath} `;
    alert(newcardNumber);
  }else{
    alert('Internet bilan bogliq muamo bor')
  }
} else {
  alert(
    "Siz bizni bankimizdan foidalana olmasiz shunki siz karta raqam xato !!",
  );
}

console.log(`karta hisobingizdagi pul : ${getMath} so'm`);


