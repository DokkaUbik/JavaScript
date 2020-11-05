//1 Массивы
// const cars =['Мазда','Форд','БМВ','Мерседес']//Задание в консоли через new Array
// const fib =[1,1,2,3,5,8,13]
// const people = [
// {name: 'Даниил' , money: 5000},
// {name: 'Никита' , money: 1000},
// {name: 'Саша' , money: 2000}
// ]
//Function
// function addItemToEnd(){
//
// }
//Method
// cars.push('Рено')
//
// console.log(cars);
//
// cars.unshift('Волга')
// console.log(cars);
//
//  const  firstItem = cars.shift()
//  const lastItem = cars.pop()
//  console.log(firstItem);
//  console.log(lastItem);
// console.log(cars);

// console.log(cars.reverse());
// console.log(cars);

// const index = cars.findIndex('БМВ')
// cars[index] = 'Порш'
// console.log(cars);
// const index = people.findIndex(function(person) {
// return person.money === 5000
//
// })
// const person = people.find(function(person) {
// return person.money === 5000
//
// })
// console.log(person);

//////////////////////////////////////////////////////////////////////
//Задача 1(Переворачивание текста)
// const text = 'Привет, я изучаю JavaScript'
// const reverseText = text.split('').reverse().join(' ')
// console.log(reverseText);
//////////////////////////////////////////////////////////////////////


// let findedPerson
// for (const person of people){
// if (person.money === 5000){
//   findedPerson = person
// }
// }
// console.log(findedPerson);

// const person = people.find(person => person.money ===5000)
// console.log(person);

// const mazda = cars.includes('Мазда')
// console.log(mazda);

// const upperCaseCars = cars.map(car =>{
// return car.toUpperCase()
// })
// console.log(upperCaseCars);
//
// const pow2 = num => num**2
// const sqrt = num => Math.sqrt(num)
//
//
// const pow2Fib = fib.map(pow2).map(sqrt)
// console.log(pow2Fib);

// const pow2 = num => num**2
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => {
//   return num > 20
// })
// console.log(pow2Fib);
// console.log(filteredNumbers);

// const people = [
// {name: 'Даниил' , money: 5000},
// {name: 'Никита' , money: 1000},
// {name: 'Саша' , money: 2000}
// ]

// const allMoney = people.reduce(function(acc, person) {
//   if (person.money>1000){
//     acc+=person.money
//   }
//   return(acc)
// }, 0)
// console.log(allMoney);

// const allMoney = people
// .filter(person => person.money > 1000)
// .reduce((acc, person) => {
//   acc+=person.money
//   return acc
// }, 0)
// console.log(allMoney);
