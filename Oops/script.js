//Object  literal
// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:23,
//     rollNo:45,
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:21,
//     rollNo:43,
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.age)
// console.log(amol.rollNo)
// amol.displayName()

// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.age)
// console.log(chinmay.rollNo)
// amol.displayName()


// console.log(amol)
// console.log(chinmay)

//function constructor 
function Person(firstName,lastName,age,rollNo){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age 
    this.rollNo = rollNo
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

let amol = new Person("amol","rao",23,23)
let pranali = new Person("pranali","pansare",23,23)
console.log(amol)
console.log(pranali)

console.log(amol instanceof Person)
console.log(pranali instanceof Person)

// Every object will have __proto__ == Parent.prototype
console.log(amol.__proto__ === Person.prototype)
console.log(pranali.__proto__ === Person.prototype)


console.log(amol)
console.log(pranali)
// amol.displayName()
// pranali.displayName()
Person.prototype.displayName = function(){
    console.log(this.firstName + this.firstName)
}
amol.displayName()
pranali.displayName()























//Template


// Encapsulation 

// Inheritance

// Polymorphism

// Abstraction 












