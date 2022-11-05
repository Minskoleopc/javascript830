// document.querySelector('h1')
// .addEventListener('click',function(){
//     document.querySelector('h1').style.color = "green";  
// })




//<p id = "one" class = "two" name ="nm">HtParaElement</p>
// css selector

// By tagName
let byTagName = document.querySelector('p')
console.log(byTagName)
// id 
let byId = document.querySelector('#one')
console.log(byId)
// class
let byClass = document.querySelector('.two')
console.log(byClass)
// common formula
// tagName[attribute = "value"]
let byCommF = document.querySelector('p[name="nm"]')
console.log(byCommF)