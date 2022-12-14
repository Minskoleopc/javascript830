

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

// // async code sync execution 
// // // async code parallel execution


// // // program 1
// // let pro2 = new Promise(function (resolve, reject) {
// //     let a = 10
// //     let b = 5

// //     if (a == b) {
// //         resolve('a and b are equal')
// //     }
// //     else {
// //         reject('a and b are not equal')
// //     }
// // })
// // pro2.then(function (str) {
// //     console.log(str)
// // }, function (str) {
// //     console.log(str)
// // })


// // let pro3 = new Promise(function (resolve, reject) {
// //     let a = 90
// //     let b = 900
// //     if (a == b) {
// //         resolve([11, 22, 33])
// //     }
// //     else {
// //         reject([-11, -22, -33])
// //     }
// // })
// // pro3.then(function (q1) {
// //     console.log(q1[0])
// // }, function (q2) {
// //     console.log(q2[1])
// // })

// // let pro4 = new Promise(function (resolve, reject) {
// //     let a = 90
// //     let b = 90
// //     if (a == b) {
// //         resolve([11, 22, 33])
// //     }
// //     else {
// //         reject([-11, -22, -33])
// //     }
// // })
// // pro4
// // .then(function (q1) {
// //     console.log(q1[0])
// // }).
// // catch(function(q2){
// //     console.log(q2[2])
// // })

// // let pro5 = new Promise(function (resolve, reject) {
// //     let a = 90
// //     let b = 90
// //     if (a == b) {
// //         resolve([11, 22, 33])
// //     }
// //     else {
// //         reject([-11, -22, -33])
// //     }
// // })
// // pro5
// // .then(function (q1) {
// //     console.log(q1[0])
// // }).
// // catch(function(q2){
// //     console.log(q2[2])
// // })
// // .finally(function(){
// //     console.log("always executed")
// // })

// // Promises is the way to  
// // handle sync execution for async code 
// // Promises is the way to handle parallel execution of async code
// // let pro = new Promise(function(resolve,reject){
// //     let a = 10
// //     let b = 10

// //     if(a == b){
// //         resolve('equal')
// //     }
// //     else{
// //         reject('not equal')
// //     }

// // })
// // pro.then(function(a){
// //     console.log(a)
// // },function(a){
// //     console.log(a)
// // })

// // second

// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 10
//     if(a == b){
//         resolve('equal')
//     }
//     else{
//         reject('not equal')
//     }

// })
// pro.then(function(a){
//     console.log(a)
// })
// .catch(function(a){
//     console.log(a)
// })


// //second

// let pro2 = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 10
//     if(a == b){
//         resolve('equal')
//     }
//     else{
//         reject('not equal')
//     }

// })
// pro2.then(function(a){
//     console.log(a)
// })
// .catch(function(a){
//     console.log(a)
// })
// .finally(function(){
//     console.log("finally block always run")
// })



// program 2
let pro3 = new Promise(function (resolve, reject) {
    let str = 'mol'
    if (str.startsWith('a')) {
        resolve('string starting with a ....')
    }
    else {
        reject('string does not starts with a')
    }
})

pro3
    .then(function (str) {
        console.log(str)
        return 1
    })
    .then(function (q) {
        console.log(q)
    })
    .catch(function (str) {
        console.log(str)
    })
    .finally(function () {
        console.log('I will print anyway')
    })
//----------------------------------------------->
function getInfo() {

    setTimeout(function () {
        console.log('user created')
    }, 3000)

    setTimeout(function () {
        console.log('user info by id')
    }, 2000)

    setTimeout(function () {
        console.log('user info print')
    }, 1000)
}
getInfo()

function getInfo() {
    setTimeout(function () {
        console.log('user created')
        setTimeout(function () {
            console.log('user info by id')
            setTimeout(function () {
                console.log('user info print')
            }, 1000)
        }, 2000)
    }, 3000)

}
getInfo()

// promises 


function createUser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('user created')
        },3000)
    })
}

function getUserId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('get user by Id')
        },2000)
    })
}

function userInfo(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('get user print info')
        },1000)
    })
}

createUser()
.then(function(str){
    console.log(str)  
    return getUserId()
})
.then(function(str){
    console.log(str)
    return userInfo()
})
.then(function(str){
    console.log(str)
})































































