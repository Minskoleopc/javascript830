
// let and const are blocked scope
// let x = 10
// console.log(x)

// program 2
// {
//     let x = 400
//     console.log(x)
// }
// console.log(x)

// program 3

// let x = 700
// {
//     let x = 500
//     console.log(x) // 500
// }
// console.log(x) // 700

// program4
// let x = 10
// {
//     x = 600
//     console.log(x)  // 600
// } 
// console.log(x) // 600

//program 5
// const i  = 500
// console.log(i)
// {
//     const io = 90
//     console.log(io)
// }
//console.log(io)


// program6

// const i7 = 90
// console.log(i7) // 90
// {
//     const i7 = 800
//     console.log(i7) // 800
// }
// console.log(i7) // 90


// program 7

// const i7 = 90
// console.log(i7) 
// {
//     i7 = 800
//     console.log(i7) 
// }
// console.log(i7) 
// let and const are blocked scope 


///////////////////////B ///////////////////////////
// Program1
// var are function scope

// var i = 10
// console.log(i)

// {
//     var oo = 900
// }
// console.log(oo)

// program2

// var t = 100
// function add(){
//     console.log(t)
// }
// add()



// function add(){
//     var t = 600
//     console.log(t)
// }
// add()
// console.log(t)


// var t = 900
// function add(){
//     var t = 600
//     console.log(t) //600
// }
// console.log(t) // 900
// add()
// console.log(t) // 900

// var t = 900
// function add(){
//     t = 600
//     console.log(t) // 600
// }
// console.log(t)  // 900
// add()
// console.log(t)  // 600