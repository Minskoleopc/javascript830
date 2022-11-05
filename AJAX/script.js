
// Sync code 
// function additionA(){
//     console.log("A i called")
// }

// function additionB(){
//     console.log("B is called")
// }

// additionB()
// additionA()

// Async -- non blocking in nature
// function additionC(){
//     setTimeout(function(){
//         console.log('C')
//     },3000)
// }

// function additionD(){
//     console.log("D")
// }

// additionC()
// additionD()

// API asyn nature
// createUser 
// getId
// get info

function getInfoForUser(){
    setTimeout(function(){
        console.log("user created")
    },3000)

    setTimeout(function(){
        console.log('get the id')
    },2000)

    setTimeout(function(){
        console.log('get inforamtion')
    },1000)

}
//getInfoForUser()

// asyn code to execute in sync 
// call back

function getInfoForUser(){
    setTimeout(function(){
        console.log("user created")
        setTimeout(function(){
            console.log('get the id')
            setTimeout(function(){
                console.log('get inforamtion')
            },1000)
        },2000)
    },3000)
}
getInfoForUser()

// parallel execution

//https://reqres.in/api/users/2 -2
//https://reqres.in/api/users/1 - 2   ------- 2 seconds
//https://reqres.in/api/users/3 - 2
//https://reqres.in/api/users/7 - 2
//https://reqres.in/api/users/9 - 2




