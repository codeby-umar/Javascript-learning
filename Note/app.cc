
#include <iostream>
using namespace std;

double cToF(double c) {
    double F = (c * 9) / 5 + 32;
    return F;
}

int main() {
    double cQiymat;

    cout << "Siz son kiriting: ";
    cin >> cQiymat;

    double jamiWork = cToF(cQiymat);

    cout << "Jami hisob: " << jamiWork << endl;

    return 0;
}





















// #include <iostream>
// using namespace std;

// int sumArray(int *arr, int n) {
//     int sum = 0;

//     for (int i = 0; i < n; i++) {
//         sum += arr[i];
//     }

//     return sum;
// }

// int main() {
//     int inputMassiv;

//     cout << "Son kiriting: ";
//     cin >> inputMassiv;

//     int* arr = new int[inputMassiv];

//     for (int i = 0; i < inputMassiv; i++) {
//         cout << i + 1 << "-sonni kiriting: ";
//         cin >> arr[i];
//     }

//     cout << "Yig'indisi: " << sumArray(arr, inputMassiv) << endl;

//     delete[] arr;

//     return 0;
// }










































// #include <iostream>
// using namespace std;

// int printArray(int num, int num2) {
//     return num + num2;
// }

// int sumArray(int num, int num2, int plus) {
//     int fullWork = printArray(num, num2) + plus;
//     return fullWork;
// }

// int main() {
//     int a, b;

//     cout << "Son kiriting: ";
//     cin >> a;

//     cout << "Son kiriting: ";
//     cin >> b;

//     int fullOff = sumArray(a, b, 30);

//     cout << "natija: " << fullOff << endl;

//     return 0;
// }














// #include <iostream>
// #include <algorithm>
// using namespace std;

// int main() {
//     int firstNumber;
//     int twoNumber;

//     cout << "Son kiriting: ";
//     cin >> firstNumber;

//     cout << "Son kiriting: ";
//     cin >> twoNumber;

//     int fullNumber = max(firstNumber, twoNumber);

//     while (true) {
//         if (fullNumber % firstNumber == 0 &&
//             fullNumber % twoNumber == 0) {

//             cout << "Bu son EKUK: " << fullNumber << endl;
//             break;
//         }

//         fullNumber++;
//     }

//     return 0;
// }









// #include <iostream>
// using namespace std;

// int main() {
//     double inputNumber;
//     double twoNumber;
//     char operatorSign;

//     cout << "Son kiriting: ";
//     cin >> inputNumber;

//     cout << "Son kiriting: ";
//     cin >> twoNumber;

//     cout << "Qanday amal bajarmoqchisiz: ";
//     cin >> operatorSign;

//     switch(operatorSign) {
//         case '+': {
//             double plus = inputNumber + twoNumber;
//             cout << "Siz qoshish amalini bajardingiz: " << plus << endl;
//             break;
//         }

//         case '-': {
//             double minus = inputNumber - twoNumber;
//             cout << "Siz ayirish amalini bajardingiz: " << minus << endl;
//             break;
//         }

//         case '*': {
//             double multiplication = inputNumber * twoNumber;
//             cout << "Siz kopaytirish amalini bajardingiz: " << multiplication << endl;
//             break;
//         }

//         case '/': {
//             if (twoNumber == 0) {
//                 cout << "0 ga bolish mumkin emas!" << endl;
//                 break;
//             }

//             double division = inputNumber / twoNumber;
//             cout << "Siz bolish amalini bajardingiz: " << division << endl;
//             break;
//         }

//         default:
//             cout << "Bunday amal bizning bazamizda yoq!" << endl;
//     }

//     return 0;
// }







