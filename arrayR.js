
// Topic array is js 


//             0          1         2
let names = ["chinmay","sarika","poorva"]
console.log(names)

// array stores the value by index 
console.log(names[0])


// Javascript - Everthing is Object 
// Human --- type ---- amol
// property --- weight , height , age 
// Method - talk() , walk()

// Array Object ---- properties and method
// property -- length 

let cities = ["pune","nagpur","bangalore"]
let q1 = cities.length
console.log(q1)


// 23 methods 
// Gym()
// action ---   excercise
// return ---   rest

//             0         1         2      3
// push()
let fruits = ["mango","apple","banana","grapes"]
let q2 = fruits.push("papaya")
console.log(q2)
console.log(fruits)

// unshift()
let q3 = fruits.unshift('chikoo')
console.log(q3)
console.log(fruits)

// pop()
let q4 = fruits.pop()
console.log(q4)
console.log(fruits)

// shift()
let q5 = fruits.shift()
console.log(q5)
console.log(fruits)

// includes

let vegetables = ["tomato","potato","brinjal","cabbage"]
let q6 =vegetables.includes('tomato')
let q7 =vegetables.includes('Tomato')
console.log(q6)
console.log(q7)

//indexOf()
vegetables = ["tomato","potato","brinjal","cabbage"]
let q8 = vegetables.indexOf("potato")
let q9 = vegetables.indexOf("Brinjal")
console.log(q8)
console.log(q9)

// reverse()
vegetables = ["tomato","potato","brinjal","cabbage"]
let q10 = vegetables.reverse()
console.log(q10)

//sort()
vegetables = ["tomato","potato","brinjal","cabbage"]
let q11 = vegetables.sort()
console.log(q11)

// concat()
vegetables = ["tomato","potato","brinjal","cabbage"]
vegetable2 = ["carrot","brinjal"]
let q12 = vegetables.concat(vegetable2)
let q13 = vegetable2.concat(vegetables)
console.log(q12)
console.log(q13)

// join()
let info =  ["chinmay","deshpande",7709192441]
let q14 = info.join(' ')  // "chinmay-deshpande-7709192441"
console.log(q14)

// map(), filter(), reduce(), forEach()
// some(), every() , find(), findIndex()

let numbers = [11,22,33,44]
// [13,24,35,46]

// map()
numbers.map(function(el,index,arr){
    console.log(el,index,arr)
})
let q15 = numbers.map(function(el,index,arr){
    return el + 2
})
console.log(q15)

// let tables  = [1,2,3,4,5,6,7,8,9,10] 
// // [2,4,6,8,10,12,14,16,18,20]
// let q16 = tables.map(function(el,index,arr){
//     //console.log(el,index,arr)
//     return el * 3
// })
// console.log(q16)

// filter()
let marks = [44,55,66,22,33,44,55,66,77]
// return me marks greater than 50
// [55,66,55,55,66,77]
let q17 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q17)

let names2 = ["amol","amit","abhay","ram","sham"]
// ["amol","amit","sham"]
let q18 = names2.filter(function(el,index,arr){
    return el.length == 4
})
console.log(q18)


// map(), filter(), reduce(), forEach()
// some(), every() , find(), findIndex()


let numbersA = [10,20,30,40,50]
let e1  = numbersA.map(function(el,index,arr){
   //console.log(el,index,arr)
   return  el * 10
})
console.log(e1)

//----------------------------------------------
numbersA = [10,20,30,40,50]
let e2 = numbersA.filter(function(el,index,arr){
    return el > 20
})
console.log(e2)
//-----------------------------------------------------
numbersA = [10,20,30,40,50]
let e3 = numbersA.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(e3)

//--------------------------------------------------------
numbersA = [10,20,30,40,50]
let e4 = numbersA.forEach(function(el,index,arr){
    console.log(el * 2)
})
console.log(e4)

//-------------------------------------

numbersA = [10,20,30,40,50]
let e5 = numbersA.filter(function(el,index,arr){
    return el >= 30
})
console.log(e5)

let e6 = numbersA.find(function(el,index,arr){
    return el >= 30
})
console.log(e6)

let e7 = numbersA.findIndex(function(el,index,arr){
    return el >= 30
})
console.log(e7)


// map(), filer(),reduce(),forEach(), find(),findIndex()

// some(),every()
numbersA = [10,20,30,40,50]
let e8 = numbersA.every(function(el,index,arr){
    return el > 5
})
console.log(e8)


numbersB = [10,20,30,40,50]
let e9 = numbersA.some(function(el,index,arr){
    return el > 150
})
console.log(e9)

// slice 
//                0        1        2         3
let citiesq  = ["pune","nagpur","mumbai","banglore"]
//                -4       -3          -2        -1
//citiesq.slice(startIndex,endIndex(not inclusive))
console.log(citiesq.slice(2))
console.log(citiesq.slice(-2))
console.log(citiesq.slice(1-2))
console.log(citiesq.slice(0,3))
console.log(citiesq.slice(-1,-4))

// splice()
//           0         1       2       3
citiesq  = ["pune","nagpur","mumbai","banglore"]

//citiesq.unshift()
//citiesq.pop()
//citiesq.splice(startIndex,NumberOFElementedTobeDeleted)

//citiesq.splice(2,1)
//citiesq.splice(1,2)
//console.log(citiesq)

citiesq.splice(1,2,"wardha","jaipur")
console.log(citiesq)


// flat 
//             0         1         2
//          0  1  2    0   1  2   0   1  2
let arr = [[11,22,33],[44,55,66],[77,88,99]]
console.log(arr[0][0]) // 11
console.log(arr[1][1])// 55
console.log(arr[2][2])// 99

let q3a = arr.flat()
console.log(q3a)

let a = [22,33,44]
let qqq = a.at(2)
console.log(qqq)

// fill 
//          0   1  2  3  4  5 6
let qqqQ = [11,22,33,44,55,66,77]
let qqqqq = qqqQ.fill(undefined,1,4)
console.log(qqqqq)

// let and const , function , comparison , logical 
// conditional statement 


// Loops 






































// marks.filter(function(el,index,arr){
//     if(index > 2){
//         return el > 50
//     }
// })


















