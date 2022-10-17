// let names = ["ram","sham","ramesh","sachin"]

// // add
// // names.push("sarika")
// // names.unshift("ram")
// // names.splice(1,2,"samay","ram")

// // update 
// names[0] = "sameer"
// console.log(names)

// // delete 
// names.pop()
// names.shift()
// names.splice(2,1)

// // retrive
// console.log(names[0])

   
let info = ["chinmay","deshpande",23,44]

// Object --- property and method 
// method --- action and return 

let info2 = {
// property :value
// key: value
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:44
}
console.log(info2)

//console.log(info2[0])
//Object does not stores the value by index

// retrive (dot notation and bracket notation)
console.log(info2.firstName)
console.log(info2['firstName'])
//update(dot notationa and bracket notation)

info2.firstName = "tanmay"
info2['firstName'] = "raj"


// add (dot notation and bracket notation)

info2.lang = "hindi"
info2['city'] = "pune"
console.log(info2)

//delete (dot notation and bracket notaion)

delete info2.city
delete info2['lang']
console.log(info2)


let vehicle = {
    color:"red",
    type:"sedane"
}

// dot notation 

// retrive 
console.log(vehicle.color)
// update 
vehicle.color = "green"
// add
vehicle.regNo = "123"
// delete
//delete vehicle.color

// bracker notation
console.log(vehicle['color'])
// update 
vehicle['color'] = "black"
// add
vehicle['modelNo'] = 2333
// delete 
delete vehicle['modelNo']

//              0       1         2       3
let fruits = ["apple","mango","banana","grapes"]
for(let i = 0 ; i < fruits.length ; i++){
    //console.log(i)
    console.log(fruits[i])
}

// object 
let info3 = {
    firstName:"ram",
    lastName:"dani",
    age:23
}

for(let props in info3){
    console.log(props)
    console.log(info3[props])
}
// amrapali 
// manish 
// peeyush
// swati k 
// akshay
// sushma
// rutuja
// dhiraj
// apeksha
// anagha
// priya
// anna