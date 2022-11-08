
let inputBox = document.querySelector('input')
let buttonA = document.querySelector('button')
let ulList = document.querySelector('ul')


buttonA.addEventListener('click',function(){
    let text = inputBox.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text // <li>Chikoo</li>
    ulList.appendChild(newLi)
    inputBox.value = " "
})







{/* <ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Grapes</li>
    <li>Chikoo</li>
</ul>
<input type="text"> // "chikoo" // 
<button>Add Element</button> */}