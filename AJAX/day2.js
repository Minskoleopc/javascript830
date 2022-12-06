

// sync
// function additionA(){
//     console.log("A is called.....")
// }

// function additionB(){
//     console.log('B is called.....')
// }

// additionA()
// additionB()


// async
// function additionC(){
//     setTimeout(function(){
//         console.log('Addition C')
//     },3000)
// }

// function additionD(){
//     console.log('Addition D')
// }

// additionC()
// additionD()

// Program3 
// user create ---- id use info ------ info print

// function getInfo(){
//     setTimeout(function(){
//         console.log('User created')
//     },3000)

//     setTimeout(function(){
//         console.log('Get user by ID')
//     },2000)

//     setTimeout(function(){
//         console.log('Get user info')
//     },1000)

// }
// getInfo()

// function getInfo() {
//     setTimeout(function () {
//         console.log('User created')
//         setTimeout(function () {
//             console.log('Get user by ID')
//             setTimeout(function () {
//                 console.log('Get user info')
//             }, 1000)

//         }, 2000)

//     }, 3000)
// }
// getInfo()


// pending , resolve , reject

// asyn code manage 

// async code sync execution 
// async code parallel execution


// program 1
let pro2 = new Promise(function (resolve, reject) {
    let a = 10
    let b = 5

    if (a == b) {
        resolve('a and b are equal')
    }
    else {
        reject('a and b are not equal')
    }
})
pro2.then(function (str) {
    console.log(str)
}, function (str) {
    console.log(str)
})


let pro3 = new Promise(function (resolve, reject) {
    let a = 90
    let b = 900
    if (a == b) {
        resolve([11, 22, 33])
    }
    else {
        reject([-11, -22, -33])
    }
})
pro3.then(function (q1) {
    console.log(q1[0])
}, function (q2) {
    console.log(q2[1])
})

let pro4 = new Promise(function (resolve, reject) {
    let a = 90
    let b = 90
    if (a == b) {
        resolve([11, 22, 33])
    }
    else {
        reject([-11, -22, -33])
    }
})
pro4
.then(function (q1) {
    console.log(q1[0])
}).
catch(function(q2){
    console.log(q2[2])
})


let pro5 = new Promise(function (resolve, reject) {
    let a = 90
    let b = 90
    if (a == b) {
        resolve([11, 22, 33])
    }
    else {
        reject([-11, -22, -33])
    }
})
pro5
.then(function (q1) {
    console.log(q1[0])
}).
catch(function(q2){
    console.log(q2[2])
})
.finally(function(){
    console.log("always executed")
})

































