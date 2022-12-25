
// Promise combinators 

// Promise.all
// Promise.allSettled
// Promise.race
// Promise.any



function getUser1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('promise-1')
        }, 3000)

    })
}

function getUser2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('promise-2')
        }, 2000)

    })
}

function getUser3() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('promise-3')
        }, 3000)
    })
}

async function getUser() {
    console.time('serial exection')
    let a = await getUser1()
    let b = await getUser2()
    let c = await getUser3()
    console.timeEnd('serial exection')
    console.log(a, b, c)
}
//getUser()

async function getUser() {
    console.time('serial exection')
    let b2 = await Promise.all([
        getUser1(),
        getUser2(),
        getUser3()
    ])
    console.timeEnd('serial exection')
    console.log(b2)
}
//getUser()

let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise-1')
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise-2')
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise-3')
    }, 100)
})
let p4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('Promise-4')
    },10)
})


// async function getUsers(){
//     let a = await Promise.all([
//         p1,p2,p3,p4

//     ])
//     console.log(a)
// }
// getUsers()


// async function getUsers(){
//     try{
//         let a = await Promise.all([
//             p1,p2,p3,p4
//         ])
//         console.log(a)
//     }
//     catch {
//         console.log('error handled')
//     }  
//     console.log('executing second')
// }
// getUsers()


// async function getUsers2() {
//     let a = await Promise.allSettled([
//         p1, p2, p3, p4
//     ])
//     console.log(a)
//     a.forEach(function(el){
//         if(el.status === "rejected"){
//             console.log('run for any failed state')
//         }
//     })
// }
// getUsers2()


// async function getUsers3() {
//     try{
//         let a = await Promise.race([
//             p1, p2, p3, p4
//         ])
//         console.log(a)
//     }
//     catch{
//         console.log('Error state')
//     }
    
// }
// getUsers3()

async function getUsers4() {
        let a = await Promise.any([
            p1, p2, p3, p4
        ])
        console.log(a)
}
getUsers4()