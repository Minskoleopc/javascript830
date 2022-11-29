// lexical scope 


function addition(){
    let a = 10
    let b = 5
    console.log(a+b) // 15
    function additionB(){
        let c = 80
        let d = 90
        console.log(a+b+c+d)  // 15
        //console.log(e)
        function additionC(){
            let e = 10
            let f = 5
            console.log(a+b+c+d+e+f)
        }
        additionC()
    }
    additionB()

}
addition()

// program2 closures
function addC(x,y){
    console.log(x+y) // 25
    return x + y
    console.log('ram')
}
let q1 = addC(12,13)
console.log(q1)

// program 3


function addD(){
    let a = 100
    let b = 50
    console.log(a+b)

    return function(){
        console.log(a+b)
    }

}

let q2 = addD()
console.log(q2)
// let q2  = function(){
//     console.log(a+b)
// }
q2()


// Actual difference let var and const 

