function additionA() {
    console.log("A is called")
}

function additionB() {
    console.log("B is called")
}

additionB()
additionA()


// A     -------- B ----------- C 

function addC() {
    setTimeout(function () {
        console.log("C is called")
    }, 1000)
}

function addD() {
    console.log('D is called')
}
addC()
addD()

// 3 functions 

// Create User    ------ ID
// Get User  By ID ------ User info
// Info display    ------  Info display

function GetUserInfoDisplay (){
    setTimeout(function(){
        console.log('user created')
    },3000)

    setTimeout(function(){
        console.log('get Info by Id')
    },2000)
    setTimeout(function(){
        console.log('display user info')
    },1000)
}

// GetUserInfoDisplay ()
// call back hell 
function getInfoDisplay() {
    setTimeout(function () {
        console.log('user created')
        setTimeout(function () {
            console.log('Get Id for user')
            setTimeout(function () {
                console.log('Get info for user')
            }, 1000)
        }, 2000)
    }, 3000)

}
// getInfoDisplay()
// Promises  -- 2015















// Es6 promises

// Async await 