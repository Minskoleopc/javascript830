// <p class = "one" id = "two"  name = "nm">name</p>


// by tagName
let byTagName = document.querySelector('p')
console.log(byTagName)
// by class
let byClass = document.querySelector(".one")
console.log(byClass)
//by id 
let byId = document.querySelector('#two')
console.log(byId)
// by commonF
let byCommonF = document.querySelector("p[name='nm']")
console.log(byCommonF)

// program1
// console.log(byCommonF.textContent)
// byCommonF.textContent = "chinmay"

byCommonF.addEventListener('click',function(){
    byCommonF.textContent = "mayuri";
    byCommonF.style.color = "red";
    byCommonF.style.background = "green"
})












// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// console.log(info.firstName)
// info.firstName  = "hanif"
// info.city = "pune"
// delete info.city


// let family = {
//     sibling:"gauri",
//     parent:{
//         mother:"kanchan",
//         father:"shirish"
//     }
// }
// family.parent.mother= "kanchan s"
// family['parent']['father'] = "shirish m"
 