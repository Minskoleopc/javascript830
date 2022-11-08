

let headOne = document.querySelector('h1')
let buttonA = document.querySelector('button')

console.log(headOne)
console.log(buttonA)

buttonA.addEventListener('click',function(){
    headOne.style.color = "green"
})
