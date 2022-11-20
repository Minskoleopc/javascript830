// Program 1
// class Person {

//     firstName ="chinmay"
//     lastName = "deshpande"
//     age = 23
//     rollNo = 56


// }

// let hanif = new Person()
// let ashwariya = new Person()
// console.log(hanif)
// console.log(ashwariya)
// ///////////////////////////////////////////
// // upadting the hanif

// hanif.firstName = "Hanif"
// hanif.age = 23
// hanif.rollNo = 44
// hanif.lastName = "A"
// console.log(hanif)


// Program2 
// class Person {
//     constructor(firstName,lastName,age,roll){
//         this.firstName = firstName
//         this.lastName  = lastName
//         this.age = age 
//         this.roll = roll
//     }
// }

// let chinmay = new Person("chinmay","deshpande",23,34)
// let poorva = new Person("poorva","vyas",34,55)
// console.log(chinmay)
// console.log(poorva)



// //Program3 
// class Person {
//     constructor(firstName,lastName,age,roll){
//         this.firstName = firstName
//         this.lastName  = lastName
//         this.age = age 
//         this.roll = roll
//         this.display = function(){
//             console.log(this.firstName + this.lastName)
//         }
//     }
// }
// let chinmay = new Person("chinmay","deshpande",23,34)
// let poorva = new Person("poorva","vyas",34,55)
// console.log(chinmay)
// console.log(poorva)

// chinmay.display()
// poorva.display()

// Program 4
// class Person {
//     constructor(firstName,lastName,age,roll){
//         this.firstName = firstName
//         this.lastName  = lastName
//         this.age = age 
//         this.roll = roll   
//     }
//     display(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let chinmay = new Person("chinmay","deshpande",23,34)
// let poorva = new Person("poorva","vyas",34,55)
// console.log(chinmay)
// console.log(poorva)

// chinmay.display()
// poorva.display()

// Program5

// q1.__proto__

let q1 = Object.create({})
console.log(q1)
q1.firstName = "amol"
q1.lastName = "rao"
q1.rollNo = 23
q1.age = 56
console.log(q1)


let info = {
    init:function(fn,ln,ag,rollN){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rollN
    },
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

let q2 = Object.create(info)
console.log(q2)
q2.init('amol','rao','age','rollNo')
console.log(q2)

function PersonB(fn,ln,roll,ag){
    this.firstName = fn 
    this.lastName = ln 
    this.roll = roll
    this.age = ag
}
PersonB.prototype.displayName = function(){
    console.log(this.firstName+ this.lastName)
}

console.log(PersonB)

// discipline -- 
// discipline --- freedom






// Object --- object literal 
// Es6 class
// function constructor
// Object.Create()