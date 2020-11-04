//1//

//const firstName = 'Daniil'//string
//const age = 18// number
//const isProgrammer = true//boolean

//const _private = 'private'
//const $ ='some value'
//const if = 'megan' // console.error();
//const withNum5 ='5'
//const 5withNum //console.error();

//2//
//console.log('Имя человека: ' + firstName + ', а возраст человека: '+ age)
//console.log(age)
//alert('Имя человека: ' + firstName + ', а возраст человека: '+ age)
//console.log('Имя человека: ' + firstName + ', а возраст человека: '+ age)
//console.log(age)

//const lastName = prompt('Введите фамилию:')
//alert(firstName + ' '+ lastName)

//3//
//let currentYear = 2020
//const bYear = 2002
//const myAge = currentYear - bYear
//console.log(myAge)

//const a = 5
//const b = 2
//let c = 32
//c+=a
//console.log(a+b)
//console.log(a-b)
//console.log(a*b)
//console.log(currentYear++)
//console.log(--currentYear)
//console.log(c)

//4 Типы Данных//
//const isProgrammer = true//boolean
//const firstName = 'Daniil'
//const age = 18// number
//let x
//console.log(typeof isProgrammer)
//console.log(typeof firstName)
//console.log(typeof x)

//5//
//const fullAge = 18
//const bYear = 2002
//const currentYear = 2020

//const isFullAge = currentYear-bYear>= fullAge
//console.log(isFullAge)

//6//
//const courseStatus = 'ready' // ready, fail, pending

//if (courseStatus === 'ready') {
//  console.log('Курс готов')
//} else if (courseStatus === 'pending') {
//  console.log('Разработка')
//}else {
//  console.log('Не готов')
//}

//const isReady = false
//if (isReady ) {
//  console.log('Все готово')
//} else {
//  console.log('Все Не готово')
//}
//Тернарное выражение
//isReady ? console.log('Все готово') : console.log('Все не готово')


//const num1 = 42//number
//const num2 = '42'//string
//console.log(num1 === num2)


//7 Булевая логика
//ссылка mdn

//8 Функций

//function calculateAge(year){
//  return 2020-year
//}

//const myAgef = calculateAge(2002)
//console.log(myAgef)
//console.log(calculateAge(2002))


//function logInfoAbout (name, year) {
//const age = calculateAge(year)
//if (age>0) {
//console.log('Человек по имени: '+ name + ' сейчас имеет возраст ' + age)
//} else {
//  console.log('Вообще-то это уже будущее')
//   }
//}
//logInfoAbout('Даниил', 2002)
//logInfoAbout('Никита', 2040)


//9 Массив
//const cars = ['Мазда', 'Мерс', 'Форд']
//console.log(cars)
//const cars = new Array ('Мазда', 'Мерс', 'Форд')
//console.log(cars)
//console.log(cars[0])
//console.log(cars.length)
 //cars[0] = 'Порше'
 //console.log(cars)
 //cars[3] = 'Мазда'
//console.log(cars)


//10 Цикл
//const cars = ['Мазда', 'Мерседес', 'Форд']

// for (let  i = 0; i < cars.length; i++) {
//   const car = cars[i]
//   console.log(car)
// }

// for (let car of cars){
// console.log(car)
// }


// 11 Объекты

// const person = {
//   firstName: 'Даниил',
//   lastName: 'Корольков',
//   year: 2002,
//   languages: ['Ru','Eng','Jap'],
//   hasWife : false,
// }
//
// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'languages'
// console.log(person[key])
// person.hasWife = true
// person.isProgrammer = true
// console.log(person)
