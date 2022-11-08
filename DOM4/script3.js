
let headOne = document.querySelector('h1')
let textBox = document.querySelector('input')
let changeButton = document.querySelector('button')

// console.log(headOne)
// console.log(textBox)
// console.log(chageButton)

changeButton.addEventListener('click',function(){
    let text = textBox.value
    headOne.style.color = text
    textBox.value = ""
})


