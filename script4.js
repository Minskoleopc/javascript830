// Program 

// toUpperCase()
// toLowerCase()
// indexOf()
// includes()
// trimStart()
// trimEnd()
// trim()


// Javascript --- object 
// Object - property and method
// action and return type
let city = "pune"
//length 
let q1 = city.length
console.log(q1)

let q2 = city.toUpperCase()
console.log(q2)

let q3 = city.toLowerCase()
console.log(q3)

let q4 = city.includes('p')
console.log(q4)


let city2 = "Nagpur"
// 0 1 2 3 4 5
// N a g p u r
let q5 = city2.indexOf("a")
console.log(q5)
let q6 = city2.indexOf("A")
console.log(q6)


let city3 = " wardha"
console.log(city3.length)
let q7 = city3.trimStart()
console.log(q7.length)


let city4 = " wardha "
console.log(city3.length) // 8
let q8 = city4.trimEnd()
console.log(q8.length) // 7


let fullName = " pune "
console.log(fullName.length)
let q9 = fullName.trim()
console.log(q9.length)


//--------------------------------------------->

// startsWith()
let q = "india"
let q10 = q.startsWith('i')
let q11 = q.startsWith('in')
let q12 = q.startsWith('In')
console.log(q10)
console.log(q11)
console.log(q12)

// endsWith()
let y = "china"
let q13 = y.endsWith('a')
let q14 = y.endsWith('na')
let q15 = y.endsWith('Na')
console.log(q13)
console.log(q14)
console.log(q15)

// splice()
// string stores the value by index

let p1 = "chinmay"
// 0    1   2    3    4    5     6
// c    h   i    n    m    a     y
// -7  -6  -5   -4   -3   -2    -1
//p1.slice(startPosition,endPosition(not inclusive))

let q16 = p1.slice(2)
console.log(q16)
console.log(p1.slice(1,5))
console.log(p1.slice(-3))
console.log(p1.slice(-5,-1))
console.log(p1.slice(1,-1))
console.log(p1.slice(-4,6))
console.log(p1.slice(-1,-4))
//charAt()

let r = "amol"
// 0  1  2  3
// a  m  o  l
let q44 = r.charAt(2)
console.log(q44)

// baseurl               resource         parameter (query)
https://reqres.in      /api/users        ?page=2

























