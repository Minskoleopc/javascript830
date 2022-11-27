// // polymorphism -overlaoding
// class Calculator {
//     addition(x, y) {
//         console.log(x + y)
//     }

//     addition(x, y, z) {
//         console.log(x + y + z)
//     }
//     addition(x, y, z, q) {
//         console.log(z)
//         console.log(q)
//         console.log(x + y + z + q)
//     }
// }
// let a = new Calculator()
// a.addition(12, 45)
//---------------------------------------------------------------------------------


class Calculator {

    addition(x, y, z, q) {
        if (x != undefined && y != undefined && z != undefined && q != undefined) {
            console.log(x + y + z + q)
        }
        else if (x != undefined && y != undefined && z != undefined) {
            console.log(x + y + z)
        }
        else if(x != undefined && y != undefined){
            console.log(x+y)
        }
    }
}
let a1 = new Calculator()
a1.addition(12, 45)
a1.addition(12, 45,34)
a1.addition(12, 45,34,45)

// overriding

// Different class , same method name , same signature

class WorldBank {

    loan(){
        console.log('I am loan from WB')
    }
    save(){
        console.log('I am save from WB')
    }

}

class SBI extends WorldBank{

    loan(){
        console.log('I am loan from SBI')
    }
    save(){
        console.log('I am save from SBI')
    }

    branchName(){
        console.log('SBI branch')
    }
}

let sbi = new SBI()

sbi.loan()
sbi.save()
sbi.branchName()

// same class , same methodName , differnt signature - overloading
// different class , same methodName , same signature - overriding
