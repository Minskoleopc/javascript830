// Es6 

class Person {

    firstName = "chinmay"
    lastName = "deshpande"
    rollNo = 34
    skills = ["python", "java", "javascript"]

}

let amol = new Person()
let chinmay = new Person()
console.log(amol)

// updating chinmay
chinmay.firstName = "chinmay   s"
chinmay.lastName = "deshpande"
chinmay.age = 30
chinmay.skills = ["c", "c++"]
console.log(chinmay)

// program2

let PersonB = class {
    constructor(firstName, lastName, age, skills) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.skills = skills
    }
}

let sarika = new PersonB("sarika", "pansare", 30, ["java", "javascript"])
console.log(sarika)



let students = [
    new PersonB("peeyush", "s", 23, ["python", "java"]),
    new PersonB("peeyush2", "s2", 27, ["python2", "java2"]),
    new PersonB("peeyush3", "s3", 28, ["python3", "java3"]),
    new PersonB("peeyush4", "s4", 23, ["python4", "java4"]),
    new PersonB("peeyush5", "s5", 23, ["python5", "java5"])
]

students.forEach(function(el){
   // console.log(el)
   for(let key in el){
        console.log(key,el[key]) 
   }
})

// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23
// }

// for(let property in info){
//     console.log(property,info[property])
// }

// program 3
class PersonC {
    
    setFirstName(str){
        this.firstName = str
    }
    setLastName(str){
        this.lastName = str
    }
    setAge(ag){
        this.age = ag
    }
    setSkills(arr){
        this.skills = arr
    }

    getFirstName(){
        console.log(this.firstName)
    }
    getLastName(){
        console.log(this.lastName)
    }
    getAge(){
        console.log(this.age)
    }
    getSkills(){
        console.log(this.skills)
    }
}

let amol3 = new PersonC()
console.log(amol3)

// amol3.setFirstName("amol")
// amol3.setLastName("rao")
// amol3.setAge(10)
// amol3.setSkills(["java","cpp","c++"])
// console.log(amol3)
// amol3.getAge()
// amol3.getLastName()
// amol3.getFirstName()
// amol3.getSkills()