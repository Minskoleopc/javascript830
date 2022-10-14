// console.log(Math.ceil(23.5))
// console.log(Math.ceil(-23.5))
// console.log(Math.floor(-23.5))
// console.log(Math.floor(23.5))
// console.log(Math.round(23.4))
// console.log(Math.round(23.5))
// console.log(Math.round(23.6))
// console.log(Math.random())  // 0 - 1
// console.log(Math.random()*6)  // 0 - 6
// console.log(Math.floor(Math.random()*6)+1)  // 1,2,3,4,5,6

// program 1 
// Guess the number (chance - 1)
// let randomNumber = Math.floor(Math.random()*6)+1
// console.log(randomNumber)
// let userInput = prompt('Enter the number between 1 to 6')
// if(userInput == randomNumber){
//     console.log('Guess is correct')
// }
// else {
//     console.log('Guess is incorrect')
// }

// program2 
// Guess the number (chance - 5)

// let randomNumber = Math.floor(Math.random()*6)+1
// console.log(randomNumber)

// for(let i = 0 ; i < 5 ; i++){
//     //console.log(i)
//     let userInput = prompt("Enter any number between 1 to 6")
//     if(userInput == randomNumber){
//         console.log('Guess is correct')
//         break
//     }
//     else {
//         console.log('Guess is incorrect , please try again')
//     }
// }

// program 3 - Guess the number (till the guess is correct)
let randomNumber = Math.floor(Math.random()*6)+1 // 3
console.log(randomNumber)
let userInput ;
console.log(userInput)
while(userInput != randomNumber ){
    userInput = prompt("Enter any number between 1 to 6") // 3
    if(randomNumber == userInput){
        console.log('Guess is correct')
        break
    }
    else {
        console.log('Guess is incorrect , please try again !')
    }
}

// program 4

// let i = 1

// while(i <= 5){
//     if(i == 3){
//         i ++ ; // 4
//         continue
//     }
//     console.log(i) // 1 // 2 // 4 // 5
//     i++;  // 2  // 3 // 5 // 6
// }


let i = 1
while(i <= 5){
    if(i == 3){
        i++ ; // 4
        continue
    }
    console.log(i) // 1 // 2 // 4 // 5
    i++ // 2 // 3 // 5 // 6
}










