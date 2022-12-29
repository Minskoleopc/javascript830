
// // async execution parallel 



// function one() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('one')
//         }, 1000)
//     })
// }

// function two() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('two')
//         }, 1000)
//     })
// }

// function three() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('three')
//         }, 1000)
//     })
// }

// function four() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             reject('four')
//         }, 1000)
//     })
// }


// Promise.all()
// async function getUser() {
//     try {
//         let a1 = await Promise.all([
//             one(),
//             two(),
//             three(),
//             four()
//         ])
//         console.log(a1)
//     }
//     catch {
//         console.log('error')

//     }
// }
// getUser()

// promise.allSettled()


async function getUser2() {
    let a1 = await Promise.allSettled([
        one(),
        two(),
        three(),
        four()
    ])
    console.log(a1)
}
getUser2()

// Promise.race()


// function five() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('five')
//         },1000)
//     })
// }

// function six() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             reject('six')
//         },1000)
//     })
// }


// async function getUser3() {

//     try {
//         let a1 = await Promise.race([
//             five(),
//             six()
//         ])
//         console.log(a1)
//     }
//     catch{
//         console.log("error")
//     }
   
// }
// getUser3()



// async function getUser4() {

//     try {
//         let a1 = await Promise.any([
//             four(),
//             five(),
//             six(),
//             one()
//         ])
//         console.log(a1)
//     }
//     catch{
//         console.log("error")
//     }
   
// }
// getUser4()


































