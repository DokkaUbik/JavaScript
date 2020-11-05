// //  1 Функция
// //Function Declaration
// function greet(name) {
// console.log('Привет -', name)
//
// }
// //Function Expression
// const greet2 = function greet2(name) {
//   console.log('Привет 2 - ', name);
// }

// greet('Даня')
// greet2('Даниил')
// console.log(typeof greet);
// console.dir(greet);

// // 2 Анонимные функций
// // let counter = 0
// // const interval = setInterval(function () {//setTimeout(function () {
//
// }, 10);
// //   if (counter === 5) {
// //   clearInterval(interval)
// // } else {
// //
// //   console.log(++counter);
// // }
// // }, 1);
//
//
// //3 Стрелочные функций

// function greet() {
// console.log('Привет -', name)
// }
// const arrow = (name , age) => {
// console.log('Привет -', name);
// }
// arrow('ДоккаЮбик')
//
// const arroe2 = name => console.log('Привет -', name);
// arrow('ДК')
//
// const pow2 = num => num **2
// console.log(pow2(5));
//
// //4 Параметры по умолчанию
// // const sum = (a,b) => a+b
// // console.log(sum(40, 2));
// const sum = (a=40,b=2) => a+b
//  console.log(sum());
//
// function sumAll(...all){
// let result = 0
// for (let num of all) {
//   result+=num
//  }
// return result
// }
// const res = sumAll(1,2,3,4,5)
// console.log(res);
//
// //5 Замыкания
// function createMember(name){
//   return function(lastName){
//     console.log(name+lastName);
//   }
// }
// const logWithLastName = createMember('Даниил')
// console.log(logWithLastName('Корольков'));
