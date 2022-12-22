// // sync call 


// // async call


// // API call one  --- 3 seconds
// // API call two  ---6 seconds 
// // API call three --- 9 seconds

// // sync
// //async


// // API to get single user info


// function getUserInfo(id){
//     return fetch(`https://reqres.in/api/users/${id}`)
//     .then(function(res){
//         return res.json()
//     })
//     .then(function(res){
//        // console.log(res.data)
//         return res.data
//     })
// }


// async function getUserInfos(id,id2,id3){
//     let a = await getUserInfo(id) //2
//     let b = await getUserInfo(id2)//4
//     let c = await getUserInfo(id3)//6
//     console.log(a,b,c)
// }


// //getUserInfos(1,2,3)
// // async function getUsersInfo(id,id2,id3){
// //     let info = await Promise.all([
// //         getUserInfo(id),
// //         getUserInfo(id2),
// //         getUserInfo(id3)
// //     ])
// //     console.log(info)
// // }
// // getUsersInfo(1,2,3)


// // Promise.all()
// async function getUserss(){
//    let data = await Promise.all([
//         Promise.resolve('hello'),
//         Promise.resolve('Bye'),
//         Promise.resolve('hello2'),
//    ])
//    console.log(data)
// }
// getUserss()


// asyn sync 
// async ---- execution sync 
// call back hell
// promises
// pending resolve  reject 
// consuming promise with .then 
// async await 

// api  -- 2
// api2 -- 2
// api3 -- 2  

// Promise combinators --- parallel 


// dummy 1  (will get the output)

// async function getUsers(){
//     let a = await Promise.all([
//         Promise.resolve("hello"),
//         Promise.resolve("hello"),
//         Promise.resolve("hi")
//     ])
//     console.log(a)
// }
// getUsers() 


// will not get the output
// async function getUsers(){
//     let a = await Promise.all([
//         Promise.resolve("hello"),
//         Promise.reject("hello"),
//         Promise.resolve("hi")
//     ])
//     console.log(a)
// }
// getUsers() 



// async function getUsers2() {
//     let b = await Promise.allSettled([
//         Promise.resolve("hello"),
//         Promise.reject("bye"),
//         Promise.resolve("hi"),
//         Promise.reject('bye')
//     ])
//     console.log(b)
// }
// getUsers2()

// async function getUser3(){
//     let a = await Promise.race([
//         new Promise(function(reject){
//             setTimeout(function(){
//                 reject("bye")
//             },00)
//         }),
//         new Promise(function(resolve){
//             setTimeout(function(){
//                 resolve("hello")
//             },1000)
//         })
//     ])
//     console.log(a)
// }
//getUser3()


// async function getUser4(){
//     let a = await Promise.any([
//         new Promise(function(reject){
//             setTimeout(function(){
//                 reject("bye1")
//             },1000)
//         }),
//         new Promise(function(reject){
//             setTimeout(function(){
//                 reject("bye2")
//             },2000)
//         }),
//         new Promise(function(resolve){
//             setTimeout(function(){
//                 resolve("hello1")
//             },3000)
//         }),
//         new Promise(function(resolve){
//             setTimeout(function(){
//                 resolve("hello2")
//             },4000)
//         })

//     ])
//     console.log(a)
// }
// getUser4()

const wait = new Promise(function(resolve){
    setTimeout(function(resolve){
    },1000)
})

console.time('timeSerial')
await wait();
await wait()
console.timeEnd('timeSerial')



















