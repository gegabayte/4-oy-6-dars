// // 1-misol
// //Oyning raqami beriladi va  uni so'zlar bilan ifodalab beruvchi algoritm yozing(switch ...case).
// let n = 7;
// let result = '';

// switch (n) {
//     case 1:
//         result = "Yanvar"
//         break;
//     case 2:
//         result = "Fevral"
//         break;
//     case 3:
//         result = "Mart"
//         break;
//     case 4:
//         result = "Aprel"
//         break;
//     case 5:
//         result = "May"
//         break;
//     case 6:
//         result = "Iyun"
//         break;
//     case 7:
//         result = "Iyul"
//         break;
//     case 8:
//         result = "Avgust"
//         break;
//     case 9:
//         result = "Sentyabr"
//         break;
//     case 10:
//         result = "Aktyabr"
//         break;
//     case 11:
//         result = "Noyabr"
//         break;
//     case 12:
//         result = "Dekabr"
//         break;
// }
// console.log(result)


// 2-misol
// Oyning raqami beriladi va shu oy qaysi faslga tegishli ekanligini aniqlovchi algoritm yozing.
// let n = 5;
// let result = '';
// let month = ``

// switch (n) {
//     case 1:
//         result = "Yanvar"
//         month = `Winter`
//         break;
//     case 2:
//         result = "Fevral"
//         month = `Winter`
//         break;
//     case 3:
//         result = "Mart"
//         month = `spring`
//         break;
//     case 4:
//         result = "Aprel"
//         month = `spring`
//         month = `spring`
//         break;
//     case 5:
//         result = "May"
//         month = `spring`
//         break;
//     case 6:
//         result = "Iyun"
//         month = `Summer`
//         break;
//     case 7:
//         result = "Iyul"
//         month = `Summer`
//         break;
//     case 8:
//         result = "Avgust"
//         month = `Summer`
//         break;
//     case 9:
//         result = "Sentyabr"
//         month = `autumn`
//         break;
//     case 10:
//         result = "Aktyabr"
//         month = `autumn`
//         break;
//     case 11:
//         result = "Noyabr"
//         month = `autumn`
//         break;
//     case 12:
//         result = "Dekabr"
//         month = `Winter`
//         break;
// }
// console.log(month)


// 3-misol
//1 dan n gacha barcha tub sonlarni ekranga chiqaruvchi algoritm yozing.
// let n = 50 ;
// let counter = 0;
// for (let i = 1; i <= n ; i++) {
//     if (n % i == 0 ) {
//         counter++;
//     }
// }
// if (counter == 2 ) {
//     console.log(`tub sonn `)
// } else {
//     console.log(`tub sonn emas`)
// }


//5-misol
//1 dan n gacha bolgan sonlarni teskari tartbda chiqaruvchi algoritm yozing.
// let n = 25;
// let X = 1;
// for (let i = n; X <= i; i--) {
//   console.log( `teskari sanoq:` , i);
// }
//6-misol
//berilgan sonning faktorialini  topuvchi algoritm yozing.


//7-misol
//Ixtiyoriy sonning raqamlari yigindisini topuvchi algoritm yozing (for).
// let sum = 0;
// for (let i = 1; i <= 10 ; i++) {
//     sum = sum + i;
//     console.log(sum);
// }