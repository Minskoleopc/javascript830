// object literal
let poorva = {
    firstName:"poorva",
    lastName:"vyas",
    rollNo:23,
    skills:["python","javascript","html","css"]
}

let sarika = {
    firstName:"sarika",
    lastName:"pansare",
    rollNo:34,
    skills:["python","js","html5","css3"]
}

// template ---
// function constructor

function Person(fn, ln ,ag, sks){
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.skills =sks
}

let mayuri = new Person("mayuri","rao",33,["python","javascript"])
let harikesh = new Person("hari","prasad",33,["html","css3"])
console.log(mayuri)
// retrive 
console.log(mayuri.firstName)
// add 
mayuri.city = "nagpur"
// update 
mayuri.age = 32
// delete
delete mayuri.lastName
console.log(harikesh)

// es6 classes


class Person2 {

    constructor(fn,ln,ag,sks){
        this.firstName = fn
        this.lastName = ln 
        this.age = ag
        this.skills = sks
    }
}

let komal = new Person2("komal","lende",32,["salesforce","testing"])
let mayank = new Person2("mayank","lende",25,["cad","testing"])
console.log(komal)
console.log(mayank)
mayank.city = "pune"
console.log(mayank)

// Object create

// let ram = Object.create({})
// console.log(ram)
// ram.firstName = "ram"
// ram.lastName = "dani"
// ram.city = "nagpur"
// ram.skills = ["python3","html"]
// console.log(ram)

let obj = {
    init:function(firstName,lastName,age, skills){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age 
        this.skills = skills
    }
}

let ram2 = Object.create(obj)
console.log(ram2)
ram2.init("ram","dani",34,["python","javascript","css"])
console.log(ram2)












// Object create




//retrive , update , add , delete