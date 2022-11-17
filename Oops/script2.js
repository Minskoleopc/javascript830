// object 
let amol = {
    firstName:"amol",
    lastName:"rao",
    age:34,
    rollNo:34,
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:30,
    rollNo:34,
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}


// function constructor 

function Person(firstName,lastName,rollNo,age){
    this.firstName = firstName
    this.lastName = lastName
    this.rollNo = rollNo
    this.age = age
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

let amol2 = new Person("amol","rao",45,66)
let chinmay2 = new Person("chinmay","deshpande",45,66)

// console.log(amol2)
// console.log(chinmay2)

// amol2.displayName()
// chinmay2.displayName()

console.log(amol2 instanceof Person)
console.log(chinmay2 instanceof Person)

// Every Object.__proto__ == Parent.Protype
console.log(amol2.__proto__ === Person.prototype)
console.log(chinmay2.__proto__ === Person.prototype)

// amol2.displayName()
// chinmay2.displayName()

Person.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.city = "Pune"

amol2.displayName()
chinmay2.displayName()

console.log(amol2)
console.log(chinmay2)

console.log(amol2.city)
console.log(chinmay2.city)

console.log(amol2.hasOwnProperty("city"))
console.log(amol2.hasOwnProperty("firstName"))
console.log(amol2.hasOwnProperty("lastName"))
console.log(amol2.hasOwnProperty("rollNo"))
console.log(amol2.hasOwnProperty("age"))

///---------------------------------------

let names = ["amol","ram","sham","satish"]
console.log(names)

console.log(names.length)
console.log(names.sort())


let names2 =  new Array(6)
names2[0] = "ram"
names2[1] = "sham"
names2[2] = "satish"
names2[3] = "laxman"
names2[4] = "sachin"
names2[5] = "ray"
console.log(names2)

console.log(names2 instanceof Array)
console.log(names instanceof Array)

console.log(names2.__proto__ == Array.prototype)
console.log(names.__proto__ == Array.prototype)


// length 
// 23 push( )......
console.log(names)

// Array.prototype.Chinmay = function(){
//     console.log('hello')
// }
// names.Chinmay()
console.log(names.hasOwnProperty('length'))
names.length


// Es6 and Object 

// Oops ES6
