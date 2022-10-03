// show up
// truthy values 
// falsy values 
//falsy // null , 0  undefined , NaN ,'', false , 7 != 7
// truthy // 12,-23, 'chinmay010','chinmay!', 7 === 7 , true , [] , {},"A"

if({}){
    console.log('hello')
}
else {
    console.log('bye')
}


// Tenary operator 
// prgram 2
let a  = 100
let b = 50
if(a > b){
    console.log("a is greater")
}
else {
    console.log('b is greater')
}
a > b ? console.log('a is greater'):console.log('b is greater')
let age = 17
let q = age >= 18 ? 'can drive':'cannot drive'
console.log(q)

// program 3

let city2 = "i"
switch(city){
    case "pune":
        console.log("MH")
    case 'indore':
        console.log('MP')
    case 'jaipur':
        console.log('RJ')
    default:
        console.log('invalid city')
}


let city22 = "pune"
switch(city){
    case "pune":
        console.log("MH")
        break;
    case 'indore':
        console.log('MP')
        break;
    case 'jaipur':
        console.log('RJ')
        break;
    default:
        console.log('invalid city')
}

// prorgram 3
let city = "nagpur"
switch(city){
    case "pune":
    case "nagpur":
        console.log("MH")
        break;
    case 'indore':
    case 'bhopal':
        console.log('MP')
        break;
    case 'jaipur':
    case 'udaipur':
        console.log('RJ')
        break;
    default:
        console.log('invalid city')
}











