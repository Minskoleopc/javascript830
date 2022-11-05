

//<p id = "one"  class = "two" name = "nm">para</p>

 let byTagName = document.querySelector('p')
 let byId = document.querySelector('#one')
 let byClass = document.querySelector('.two')
 let byAttr = document.querySelector('p[name = "nm"]')

 console.log(byTagName)
 console.log(byId)
 console.log(byClass)
 console.log(byAttr)