// sync code vs async code


// function additionA(){
//     console.log('A')
// }

// function additionB(){
//     console.log('B')
// }

// additionA()
// additionB()



// function additionC(){
//     setTimeout(function(){
//         console.log('C')
//     },3000)
// }
// function additionD(){
//     console.log('D')
// }

// additionC()
// additionD()

// program 3
// user create 
// get the id
// get the info

// function getInformation() {
//     setTimeout(function () {
//         console.log('user created successfully')
//     }, 3000)

//     setTimeout(function () {
//         console.log('user id')
//     }, 2000)

//     setTimeout(function () {
//         console.log('user info')
//     }, 1000)
// }
// getInformation()

function getInformation() {
    setTimeout(function () {
        console.log('user created successfully')
        setTimeout(function () {
            console.log('user id')
            setTimeout(function () {
                console.log('user info')
            }, 1000)
        }, 2000)

    }, 3000)
}
//getInformation()

// Promises ---> pending,resolve,reject

// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 100
//     if (a == b) {
//         resolve('equal')
//     }
//     else {
//         reject('not equal')
//     }
// })

// pro.then(function (str) {
//     console.log(str)
// }, function (str) {
//     console.log(str)
// })



// let pro2 = new Promise(function (resolve, reject) {
//     if ("amol".startsWith('A')) {
//         resolve(true)
//     }
//     else {
//         reject(false)
//     }

// })
// pro2.then(function(a){
//     console.log(a)
// })
// .catch(function(b){
//     console.log(b)
// })





// let pro3 = new Promise(function (resolve, reject) {
//     if ("amol".startsWith('a')) {
//         resolve(true)
//     }
//     else {
//         reject(false)
//     }

// })
// pro3.then(function(a){
//     console.log(a)
// })
// .catch(function(b){
//     console.log(b)
// })
// .finally(function(){
//     console.log('run at any cost')
// })



// let pro4 = new Promise(function(resolve,reject){

//     if(10 === '10'){
//         resolve('equal')
//     }
//     else {
//         reject('Not equal')
//     }
// })

// pro4.then(function(str){
//     console.log(str)
//     return 'pass'
// })
// .then(function(str2){
//     console.log(str2)
// })
// .catch(function(str3){
//     console.log(str3)
// })
// .finally(function(){
//     console.log('calculated')
// })



// function getInformation() {
//     setTimeout(function () {
//         console.log('user created successfully')
//         setTimeout(function () {
//             console.log('user id')
//             setTimeout(function () {
//                 console.log('user info')
//             }, 1000)
//         }, 2000)

//     }, 3000)
// }

function getUser(){
    return new Promise(function(resolve){
        setTimeout(function(){
          resolve('user created')
        },3000)
    })
}

function getID(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('user ID')
        },2000)
    })
}

function getInfo(){
    return new Promise(function(resolve){
        setTimeout(function(){
        resolve('user Info')
        },1000)
    })
}

getUser()
.then(function(str){
    console.log(str)
    return getID()
})
.then(function(str){
    console.log(str)
    return getInfo()
})
.then(function(str){
    console.log(str)
})