//<p id = 'one' class = "two" name = "nm">Listing paragraphs</p>
// id 
let q1 = document.querySelector('#one')
console.log(q1)
// className
let q2 =document.querySelector('.two')
console.log(q2)

// tagName
let q3 = document.querySelector('p')
console.log(q3)

// attribute CoF
let q4 = document.querySelector('p[name = "nm"]')
console.log(q4)

let q5 = document.querySelectorAll('li')
console.log(q5)

for(let i = 0 ;  i < q5.length ; i++){
    //console.log(q5[i])
    q5[i].style.color = "red"
}


// Retrive 

let q6 = document.getElementById('one')
console.log(q6)
let q7 = document.querySelectorAll('.three')
console.log(q7)
let q8 = document.getElementsByClassName('three')
console.log(q8)
let q9 = document.getElementsByTagName('li')
console.log(q9)

console.log(q7.length)
console.log(q8.length)
q7.forEach(function(el){
    el.style.color = "purple"
})








//q8.forEach() 
// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"

// }

// for(let key in info){
//     console.log(key ,info[key])
// }

// for(let key in Object.keys(info)){
//     console.log(key ,info[key])
// }
// for(let key in Object.values(info)){
//     console.log(key ,info[key])
// }
// for(let [key,val] in Object.entries(info)){
//     console.log(key ,info[key])
// }






















// Revision
// //        0  1  2  3
// let a =  [11,22,33,44]

// for(let i = 0 ; i < a.length ; i++){
//     //console.log(i)
//     console.log(a[i])
// }


