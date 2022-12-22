

// const w = function(){
//     return new Promise((resolve)=>{
//         setTimeout((resolve),1000)
//     })
// }

// async function getUser(){
//     console.time('timeSerial')
//     await w();
//     await w();
//     console.timeEnd('timeSerial')
// }
// getUser()



// async function getUser(){
//     console.time('timeParallel')
//     await Promise.all([
//         w(),
//         w()  
//     ])
//     console.timeEnd('timeParallel')
// }
// getUser()


// let p1 = new Promise(function(resolve){
//     setTimeout(() => {
//        resolve('promise') 
//     }, 1000);
// })

// let p2 = new Promise(function(resolve){
//     setTimeout(() => {
//        resolve('promise-2') 
//     }, 2000);
// })

// let p3 = new Promise(function(resolve){
//     setTimeout(() => {
//        resolve('promise-3') 
//     }, 3000);
// })

// let p4 = new Promise(function(resolve ,reject){
//     setTimeout(() => {
//        reject('promise-4') 
//     }, 3000);
// })

// without handling the erroe
// async function getUser(){
//     let a1 = await Promise.all([
//         p1,
//         p2,
//         p3 ,
//         p4
//     ])
  
//     console.log(a1)
// }
// getUser()
//  async function getUser(){
//     try{
//         console.log( await Promise.all([
//             p1,
//             p2,
//             p3 ,
//             p4
//         ]))
//     }
//     catch{
//         console.log("Error occured")
//     }
// }
// getUser()
// console.log('Hello i am running')
// Error handle --- does not halt programme


// All settled



// let p1 = new Promise(function(resolve){
//     setTimeout(() => {
//        resolve('promise') 
//     }, 1000);
// })

// let p2 = new Promise(function(resolve){
//     setTimeout(() => {
//        resolve('promise-2') 
//     }, 2000);
// })

// let p3 = new Promise(function(resolve){
//     setTimeout(() => {
//        resolve('promise-3') 
//     }, 3000);
// })

// let p4 = new Promise(function(resolve ,reject){
//     setTimeout(() => {
//        reject('promise-4') 
//     },100000);
// })

// async function getUser(){
//     let a1 = await Promise.allSettled([
//         p1,
//         p2,
//         p3 ,
//         p4
//     ])
//     console.log(a1)
//     a1.forEach(function(el){
//         if(el.status == "rejected"){
//             console.log('One found with rejected')
//         }
//     })
// }
// getUser()



// async function getUser(){
//     try {
//         console.log( await Promise.race([
//             p1,
//             p2,
//             p3 ,
//             p4
//         ])
//         )

//     }
//     catch {
//         console.log('errod occured')
//     }
  

  
// }
// getUser()

// let p1 = new Promise(function(resolve){
//     setTimeout(() => {
//        resolve('promise') 
//     }, 1000);
// })
// let p2 = new Promise(function(resolve){
//     setTimeout(() => {
//        resolve('promise-2') 
//     }, 2000);
// })

// let p3 = new Promise(function(resolve){
//     setTimeout(() => {
//        resolve('promise-3') 
//     }, 3000);
// })

// let p4 = new Promise(function(resolve ,reject){
//     setTimeout(() => {
//        reject('promise-4') 
//     },100);
// })


// async function getUser(){
//     try {
//         console.log(await Promise.any([
//             p1,
//             p2,
//             p3 ,
//             p4
//         ])
//         )

//     }
//     catch {
//         console.log('errod occured')
//     }
// }
// getUser()

// Promise.all ----->  reject --- shorcuit ===> array 
// Promise.allSettled --->  array (if for reject)
// Promise.race  -----> whoever either resolve or reject
// Promise.any --- shortcuit at first resolve , ignore any
// while writing promise first parameter is always is resolve state