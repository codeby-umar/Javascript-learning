// 2 - amaliy mashg'ulot
// 22 - topshiriq
// let num = 20;
// let num1 = 30;

// console.log(num.toString(2));
// console.log(num1.toString(2)); 


// 3 - amaliy mashg'ulot

// let inputNumber = +prompt('Son kiriting: ');
// let twoNumber = +prompt('Son kiriting :');
// let operator = prompt('Qanday amal bajarmoqchisiz :');

// switch(operator){
//     case '+':
//         let plus = inputNumber + twoNumber;
//         console.log(`Siz qoshish amalini bajardingiz : ${plus}`);
//     case '-':
//         let minus = inputNumber - twoNumber;
//         console.log(`Siz hozir ayridingiz : ${minus}`);
//     case '*':
//         let multiplication = inputNumber * twoNumber;
//         console.log(`Siz kopaytirish amalini bajardingiz : ${multiplication}`);
//     case '/':
//         let division = inputNumber / twoNumber;
//         console.log(`Siz bolish ammalini bajardungisz : ${division}`)
//     default : 
//         console.log('Siz xatolik yuz berdi biz bunday ammal yoq bazamiszda')
// }






// // 4 - amaliy mashg'ulot
// let firstNumber = prompt('Son kiriting :');
// let twoNumber = prompt('Son kiriting :');
// let fullNumber = Math.max(firstNumber , twoNumber);

// while(true){
//     if(fullNumber % firstNumber === 0 && fullNumber % twoNumber == 0){
//         console.log('Bu son ekuk :' , fullNumber );
//         break
//     }
//     fullNumber++
// }





// 5 - amaliy mashg'ulot


// let a = +prompt('Son kiriting :');
// let b = +prompt('Son kiriting :');

// function printArray(num , num2){
//      return num + num2
// }

// const sumArray = (plus)=>{
//     let fullWork = printArray(a , b) + plus;
//     return fullWork
// }

// let fullOff = sumArray(30);
// console.log(fullOff);






// 6 - amaliy mashgulot

// let inputMassiv = +prompt("Son kiriting :");

// let arr = [];

// for (let i = 0; i < inputMassiv; i++) {
//     let number = +prompt(`${i + 1}-sonni kiriting:`);
//     arr.push(number);
// }

// function sumArray(arr, n) {
//     let sum = 0;

//     for (let i = 0; i < n; i++) {
//         sum += arr[i];
//     }

//     return sum;
// }

// console.log("Yigindisi:", sumArray(arr, inputMassiv));




// 8 - amaliy mashgulot


let cQiymat = +prompt('Siz son kiriitng :')

function cToF(c){
   let F = (c * 9) / (5 + 32);
   return F
}

let jamiWork = cToF(cQiymat);
console.log(`Jami hisob : ${jamiWork}`)