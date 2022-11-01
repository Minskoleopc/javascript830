
// object literals

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:27,
    skills:["python","javascript","html","css"]
}
let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:32,
    skills:["python","django3","sql"]
}

// amol (dot notation and bracket notation)
// console.log(amol.firstName)
// amol.firstName = "amit"
// amol.city = "pune"
// delete amol.skills


// console.log(amol['firstName'])
// amol['firstName'] = "amit"
// amol['city'] = "pune"
// delete amol['skills']

// templates 

// function constructor


function Person(fn,ln,ag,sks){
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.skills = sks
}


let komal = new Person("komal","palke",23,["python","javascript"])
let ram = new Person("ram","dani",34,["html","css"])
console.log(komal)
komal.city = "nagpur"
console.log(komal)


// Es6 class
class Person2 {
    constructor(fn,ln,ag,sks){
        this.firstName = fn
        this.lastName = ln
        this.age = ag 
        this.skills = sks
    }
}
let komal2 = new Person2("komal2","palke2",44,["java","js"])
console.log(komal2)
komal2.city = 'pune'




// Es6 class

// Object.create


