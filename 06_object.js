//Объекты


// const person = {
//   name: 'Daniil',
//   age: 18,
//   isProgrammer: true,
//   lang: ['ru','en','jap'],
//   // 'complex key':'Complex Value',
//   // ['key_'+ (1+3)]: 'Computed Key',
//   greet(){
//     console.log('greet from rerson');
//   },
//   info(){
//     console.log('this:', this);
//     console.info('Информация про человека по имени: ', this.name);
//   }
// }

// console.log(person.name);
// console.log(person['age']);
// console.log(person['complex key']);
// person.greet()
//
//
// person.age++
// person.lang.push('ger')
// // person['key_4']= undefined
// delete person ['key_4']
// console.log(person);

// const name = person.name
// const age = person.age

// const {name, age, lang} = person
// console.log(name, age, lang);
// console.log(person);
// for (let key in person){
//   if (person.hasOwnProperty(key)) {
//   console.log('key: ',key);
//   console.log('value:', person[key]);
//  }
// }

// const keys = Object.keys(person)
// keys.forEach((key) => {
//   console.log('key: ',key);
//   console.log('value:', person[key]);
// });
//
// console.log(keys);

//Context
// person.info()

// const logger = {
//   keys(){
//     console.log('Object keys:', Object.keys(this));
//   },
//   keysAndValues(){
//     Object.keys(this).forEach((key) => {
//       console.log(`"${key}": ${this[key]}`)
//     })
//   },
//   withParams(top = false, between=false, bottom=false){
// if (top){
//   console.log(`-----Start-----`);
// }
//     Object.keys(this).forEach((key, index, array) => {
//       console.log(`"${key}": ${this[key]}`)
//       if (between && index!==array.length -1){
//         console.log(`---------------`);
//       }
//     })
//     if (bottom){
//       console.log(`-----End-----`);
//     }
//   }
// }
// const bound = logger.keys.bind(logger)
// bound()
// logger.keys.call(person)
// logger.keysAndValues.call(person)
// logger.withParams.call(person, true, true, true)
// logger.withParams.apply(person, [true, true, true])
