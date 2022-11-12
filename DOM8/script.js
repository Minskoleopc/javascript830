// retrive 

{/* <p class="one two three">This is para one</p>
<p id="two">This is para two</p>
<p name="three">This is para three</p> */}

// let tagName = document.querySelector('p')
// let id = document.querySelector('#two')
// let classN = document.querySelector('.one')
// let name = document.querySelector('p[name="three"]')

let id = document.getElementById('two')
console.log(id)

let nodeList = document.querySelectorAll('p')
console.log(nodeList.length)

let htmlCollection = document.getElementsByTagName('p')
console.log(htmlCollection.length)

let classOne = document.querySelectorAll('.one') // nodeList
console.log(classOne)

let classTwo = document.getElementsByClassName('one')
console.log(classTwo)

//document.getElementById('two')  -  single element
//document.getElementsByTagName('p') - htmlCollection
//document.getElementsByClassName('one') - htmlCollection

//----------------------- Attribute -----------------------
let pElement = document.querySelector('.five')
console.log(pElement)
console.log(pElement.className)
pElement.className = "six"

pElement.classList.add('five')
pElement.classList.add('seven')
pElement.classList.remove('six')

pElement.classList.toggle('six')
pElement.classList.toggle('six')


  








