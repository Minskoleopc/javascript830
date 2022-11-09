
let buttonOne = document.querySelector('#one')
let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')


buttonOne.addEventListener('click', function () {
    let text = inputText.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text // <li>Chikoo</li>
    CreateButton(newLi)
    ulList.appendChild(newLi)
    inputText.value = ""
})


ulList.addEventListener('click', function (event) {

    if (event.target.tagName == "BUTTON") {

        if (event.target.className === "remove") {
            // this code to remove element
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }

        else if (event.target.className === "down") {
            // to perform down functionality



        }
        else if (event.target.className === "up") {
            // to perform up functionality

        }

    }

})




{/* <button class = "remove">Remove</button>
    <button class = "up">Up</button>
    <button class = "down">Down</button> */}

function CreateButton(li) {
    let remove = document.createElement('button') // <button></button>
    remove.textContent = "Remove"  // <button>Remove</button>
    remove.className = "remove" // // <button class = "remove">Remove</button>
    li.appendChild(remove)

    let up = document.createElement('button') // <button></button>
    up.textContent = "Up"  // <button>Down</button>
    up.className = "up" // // <button class = "up">Up</button>
    li.appendChild(up)

    let down = document.createElement('button') // <button></button>
    down.textContent = "Down"  // <button>Down</button>
    down.className = "down" // // <button class = "down">Down</button>
    li.appendChild(down)


}
















