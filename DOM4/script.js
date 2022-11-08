
//  <h1 id = "one"  class ="two"  name ="nm">Chinmay</h1>
let tagName = document.querySelector('h1')
console.log(tagName)

let byClassName = document.querySelector('.two')
console.log(byClassName)

let byCommonF = document.querySelector('h1[name="nm"]')
console.log(byCommonF)

let byId = document.querySelector('#one')
console.log(byId)

byId.addEventListener('click',function(){
    byId.style.color = "red" 
    //console.log(byId.textContent)
    byId.textContent = "poorva"
})



