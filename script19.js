let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    skills:["python","javascript","css"],
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
let mayuri = {
    firstName:"mayuri",
    lastName:"katwe",
    age:24,
    skills:["python3","javascript","sql"],
}

let peeyush = {
    firstName:"peeyush",
    lastName:"sharma",
    age:27,
    skills:["java","javascript","sql"],
}
// let borrowDisplay = chinmay.displayName
// let a = borrowDisplay.bind(mayuri)
// a()
// let b = borrowDisplay.bind(peeyush)
// b()

let borrowDisplay = chinmay.displayName
borrowDisplay.call(mayuri)
borrowDisplay.call(peeyush)

// program 2
let studentA = {
    firstName:"chinmay",
    lastName:"deshpande"
}

let studentB = {
    firstName:"mayuri",
    lastName:"rao"
}
let studentC = {
    firstName:"mayuri",
    lastName:"katwe"
}
let studentD= {
    firstName:"amol",
    lastName:"rao"
}

let displayName = function(greet){
    console.log(greet , this.firstName,this.lastName)
}
// displayName.call(studentA,"gm")
// displayName.call(studentB,"ge")
// displayName.call(studentC,"ga")
// displayName.call(studentD,"gn")
displayName.apply(studentA,["GoodMorning !"])
displayName.apply(studentB,["GoodEvening !"])
displayName.apply(studentC,["GoodAfterNoon !"])
displayName.apply(studentD,["GoodNight !"])

// sat sun -- property 
// typescript
// 4 projects 