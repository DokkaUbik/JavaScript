//Event Loop
// const timeout = setTimeout(function () {
//   console.log(`After timeout`);
// }, 1000);
// clearTimeout(timeout)
//
// const interval = setInterval(function () {
//   console.log(`After timeout`);
// }, 1000);
// const delay = (callback, wait = 1000) => {
//   setTimeout (callback, wait)
//
//   }
//   delay(() => {
//     console.log(`After 2 seconds`)
//   }, 2000)

// let wait = 10000;
// const promise = new Promise((resolve, reject ) => {setTimeout(function() {
// resolve()
// }, wait)
// })
//
// promise
// .then(() => {
// console.log(`After 2 seconds`);
// })
// .catch(err => console.error(`Error: `, err))
// .finally(() => console.log(`Finally`))

// const getData = () => new Promise(resolve=> resolve([
// 1,1,2,3,5,8,13
// ]))
// getData().then (data => console.log(data))

// async function asyncExample() {
// const data = await getData()
// console.log(`Data`, data);
// }
// asyncExample()
// async function asyncExample() {
//   try {
//     const data = await getData()
//     console.log(`Data`, data);
//   } catch (e) {
//     console.log(e);
// }finally{
//   console.log(`Finally`);
// }
// }
// asyncExample()
