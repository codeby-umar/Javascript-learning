// 'Umumiy balansni hisoblash.
// Jami daromadni hisoblash.
// Jami xarajatni hisoblash.
// Eng ko'p pul sarflangan kategoriyani topish.
// Yangi tranzaksiya qo'shish.
// ID orqali tranzaksiyani o'chirish.
// Tranzaksiyani tahrirlash.
// Sana oralig'i bo'yicha tranzaksiyalarni filter qilish.
// Xarajatlarni kattasidan kichigiga saralash.
// Kategoriya bo'yicha statistikani chiqarish.'


// 1 - topshiriq 

// let fullInformation = JSON.parse(localStorage.getItem('Sizning pul sariflagan maxsulotlaringiz :')) || [];

// let bigData = {
//     id : Date.now(),
//     type : prompt('Siz qanday ko\'rinishda pul to\'ladingiz : ' , ' '),
//     category : prompt('Siz nima xarid qildiznigz :'),
//     money : Number(prompt('Siz qanchaga sotib oldingiz :')),
//     date : new Date()
// }

// fullInformation.push(bigData);

// localStorage.setItem('Mahsulotlar :' , JSON.stringify(fullInformation));

// console.log(fullInformation)





// 2 - opshiriq mufaqiyatli bajarildi

// 1. PIN-kod to'g'ri yoki noto'g'riligini tekshir.
// 2. Agar PIN noto'g'ri bo'lsa, operatsiyani to'xtat.
// 3. Pul yechish summasi 0 dan katta bo'lishi kerak.
// 4. Agar balans yetarli bo'lmasa, xatolik chiqar.
// 5. Agar yechiladigan summa 100000 dan kam bo'lsa, operatsiyani rad et.
// 6. Agar summa 1 000 000 dan katta bo'lsa, qo'shimcha tasdiqlash talab qil.
// 7. Barcha shartlar bajarilsa, balansdan pulni ayir.




// let pinCode = +prompt('karta pincode kiriting :', '3290');
// let savedNumber = 3290;
// let cardMoney = 2000;




// if (pinCode == savedNumber) {
//     console.log('Siznig parolingiz to\'g\'ri keyingi amalni bajarishingiz mumkin');
//     let feedback = confirm('Siz hartanigzdan pul yechib olmoqchimisz :');

//     if (feedback == true) {
//         let getItems = prompt('Siz qancha pul yechib olmoqchisiz :');
//         let overMoney = cardMoney - getItems;
//         console.log(`Siz ${getItems} ming so'm yechib oldingi`);

//         if (getItems <= 10) {
//             alert('Siz bunday miqtorda pul yecha olmaysiz eng kami 15 somdan kam bolmasligi lozim !!')
//         } else if (getItems >= 1000000) {
//             alert('Siz bunday katta miqdorda pul yecha olmaysiz !!')
//         } else {
//             console.log('Siz nimadur xatolik yuz berdi !!')
//         }

//         let getFeed = confirm('Siz kartangizdagi pul ko\'rmoqchimisz :');

//         if (getFeed == true) {
//             console.log(`Sizning kartangizda ${overMoney} ming so'm pul qoldi`)
//         } else {
//             console.log('Internet uzulish bo\'ldi , qayta urinib ko\'ring !')
//         }


//     } else if (feedback == false) {
//         let sambo = confirm('Siz pul yechib olmaysizmi ?')
//         console.log(sambo)
//     };
// } else {
//     alert('Siz parol notog\'ri kiritdingiz !!')
// }



// 3 - topshiriq bajarishda

// Talaba statusi active bo'lmasa, tizimga ruxsat berilmasin.
// Agar to'lov 0 bo'lsa, to'lov qilinmagan deb chiqar.
// Agar to'lov kontraktning 50% idan kam bo'lsa, ogohlantirish ber.
// Agar 50–80% oralig'ida bo'lsa, qisman to'langan deb chiqar.
// Agar 80–99% oralig'ida bo'lsa, deyarli to'langan deb chiqar.
// Agar 100% yoki undan ko'p bo'lsa, kontrakt to'liq to'langan deb chiqar.
// Davomat 70% dan past bo'lsa, alohida ogohlantirish chiqar.


// let isActive = prompt('Siz hozirda jarayondamisz Y/N :' , 'Y');
// let action = 8100;
// let sell = 7100
// let umimiySumma = (sell / action) * 100
// let airBag = Math.floor(umimiySumma)

// if(isActive == 'Y'){
//    if(airBag <= 50){
//     console.log(`Sizning to\'agan pulingiz 50% yetmayapti : ${airBag}% to'langan`)
//    }else if(airBag >= 50 || airBag <= 80){
//     console.log(`Siz kantrakt pulingizni qisman tolangan : ${airBag}% to'langan `)
//    }else if(airBag >= 100){
//     console.log(`Siz 100% to'lov qilgansiz to'lov qilingan summa : ${airBag} % to'langan`)
//    }else{
//     alert('Sizda numadur xatoli yuz berdi')
//    }
// }









// if(isActive == 'Y'){
//     if(action == 0){
//         console.log('Siz hech qanday mablag\' to\'lamadingiz !')
//     }else if((action * 50) / 100){
//         console.log('Siz 50% to\'lov qilgansiz !')
//     }else if((action * 50) / 100 || (action * 80) / 100){
//         console.log('Siz to\'lov qilgansiz')
//     }else if((action * 100) / 100){
//         console.log('Siz to\'liq to\'lov qilgansiz')
//     }else{
//         alert('Sizda nimadur xatolik yuz berdi')
//     }
// }else if(isActive == 'N'){
//     alert('Siz active emassiz qayta uruning')
// }



// 5 - topshiriq

// hafta kunlarni chiqaraib bertuvchi dastur

// const weekDay = 6;

// switch (weekDay) {
//     case 1:
//         console.log('Bugun dushanba kuningiz barokatli o\'tsin brodar');
//         break;
//     case 2:
//         console.log('Bugun Seshanba kuningiz barokatli o\'tsin brodar');
//         break;
//     case 3:
//         console.log('Bugun chorshanba kuningiz barokatli o\'tsin brodar');
//         break;
//     case 4:
//         console.log('Bugun Payshanba kuningiz barokatli o\'tsin brodar');
//         break;
//     case 5:
//         console.log('Bugun Juma muborak kuningiz barokatli o\'tsin brodar');
//         break;
//     case 6:
//         console.log('Bugun Shanba kuningiz barokatli o\'tsin brodar');
//         break;
//     case 7:
//         console.log('Bugun Yakshanba kuningiz barokatli o\'tsin brodar');
//         break;

//     default: 'Siz qandaydur kun hafta tanlashingiz lozim !'
// }



// 6 - topshiriq

// const num = 30;
// const num1 = 40;
// let input = prompt('Siz qanday operatordan foidalanmoqchisiz :');

// switch(input){
//     case '+':
//         console.log(`Siz + amalini bajardingiz : ${num + num1}`);
//         break;
//     case '-':
//         console.log(`Siz - amalini bajardingiz : ${num - num1}`);
//         break;
//     case '*':
//         console.log(`Siz * amalini bajardingiz : ${num * num1}`);
//         break;
//     case '/':
//         console.log(`Siz / amalini bajardingiz : ${num / num1}`);
//         break;
//     case '**':
//         console.log(`Siz ** amalini bajardingiz darajaga ko'tarish : ${num ** num1}`);
//         break;

// }



// 7 - topshiriq