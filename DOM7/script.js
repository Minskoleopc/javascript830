
let ulList = document.querySelector('ul')
let buttonOne = document.querySelector('#one')
let input = document.querySelector('input')

buttonOne.addEventListener('click', function () {
    let text = input.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text //<li>Chikoo</li>
    createButton(newLi)
    ulList.appendChild(newLi)
    input.value = ""

})

ulList.addEventListener('click',function(event){
    // console.log(event.target)
    // console.log(event.target.className)
    // console.log(event.target.tagName)

    // remove up and down

    if(event.target.tagName == "BUTTON"){

        if(event.target.className == "remove"){
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        
        if(event.target.className == "up"){
            let li = event.target.parentElement // <li></li>
            let ul = li.parentElement  // <ul></ul>
            let prev = li.previousElementSibling
            if(prev){
                ul.insertBefore(li,prev) 
            }

        }

        if(event.target.className == "down"){

            let li = event.target.parentElement // <li></li>
            let ul = li.parentElement  // <ul></ul>
            let next = li.nextElementSibling
            if(next){
                ul.insertBefore(next,li)
            }
          
        }

    }

})


function createButton(li) {
    // <button class = "remove">Remove</button>
    // <button class = "up">Up</button>
    // <button class = "down">Down</button>
    let remove = document.createElement('button')  // <button></button>
    remove.textContent = "Remove"  // <button>Remove</button>
    remove.className = "remove" // <button class = "remove">Remove</button>
    li.appendChild(remove)

    let up = document.createElement('button') // <button></button>
    up.textContent = "Up" // <button>Up</button>
    up.className = "up" // <button class = "up">Up<button>
    li.appendChild(up)

    let down = document.createElement('button') // <button></button>
    down.textContent = "Down" // <button>Down</button>
    down.className = "down" // <button class = "down">Down<button>
    li.appendChild(down)


}