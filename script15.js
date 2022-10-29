

// let names = ["chinmay","ram","sham","satish"]
// console.log(names)

// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:12,
//     rollNo:23
// }
// console.log(info)
// let a = true
// let g = 19
// let q = "ram"


let setA = new Set([1,2,3,4,5,6,1])
console.log(setA)

let setB = new Set("chinmaya")
console.log(setB)

let setC = new Set()
console.log(setC)

console.log(typeof setC)

// Object --- property and methods
let setD = new Set()

// size
console.log(setD.size)

// method
console.log(setD)

// add()
setD.add("apple")
console.log(setD)
console.log(setD.size)
setD.add("apple")
console.log(setD.size)
setD.add("grapes")

//has()
let q1 = setD.has("apple")
let q2 = setD.has("chikoo")
console.log(q1)
console.log(q2)

//delete()
console.log(setD)
let q3 = setD.delete('apple')
console.log(setD)
console.log(q3)

// let q4 = console.log("hello")
// console.log(q4)

setD.clear()
console.log(setD)

let setE = new Set(["apple","chikoo","banana"])
console.log(setE)

// does set stores value by index
console.log(setE[0])

// set loop
setE.forEach(function(el){
    console.log(el)
})

// with Map
console.log(setE.keys())
console.log(setE.values())
console.log(setE.entries())



















