// logical operator 


// AND 

// True  && True  --------->  True
// True  && False ---------> False
// False && True  ---------> False
// False && False ---------> False

console.log(6 > 5 && 7 ==7)
console.log(6 == '6' && 7 !== 7)
console.log(6 >= 7 &&  8 === 8)
console.log(7 != 7 &&  9 > 10)
// OR 
// True  || True  --------->  True
// True  || False --------->  True
// False || True  --------->  True
// False || False ---------> False


console.log(6 > 5 || 7 ==7)  // True
console.log(6 == '6' || 7 !== 7) // True
console.log(6 >= 7 ||  8 === 8) // True
console.log(7 != 7 ||  9 > 10) // False

// NOT
// True --- False 
// False --- True
console.log(!7 === 7) // False
console.log(!8 !== 8) // True


// Program1

// conditional statements
// input ---- multiple out come 
// numT > 0  && numT <= 5  =====> 5 % discount
// numT > 5  && numT <= 10 =====? 10 % discount
// numT > 10   ======> 20 % discount

// if(7 != 7){
//     //statement
//     console.log('hello!')
// }
// else {
//     //statement
//     console.log('bye!')
// }


// if(condition){
//     //
// }else {

// }


let numT = 11
// if(numT > 0 && numT <= 5){
//     console.log('5 % discount')
// }
// if(numT > 5 && numT <= 10){
//     console.log('10 % discount')
// }
// if(numT > 10){
//     console.log('20 % discount')
// }

if(numT > 0 && numT <= 5){
    console.log('5 % discount')
}
else if(numT > 5 && numT <= 10){
    console.log('10 % discount')
}
else if(numT > 10){
    console.log('20 % discount')
}

// program2 
let  marks = 92

// if(marks > 90){
//     console.log('Grade A')
// }
// if(marks > 75){
//     console.log("Grade B")
// }
// if(marks > 65){
//     console.log("Grade C")
// }

// if(marks > 90){
//     console.log('Grade A')
// }
// else if(marks > 75){
//     console.log("Grade B")
// }
// else if(marks > 65){
//     console.log("Grade C")
// }

// program 3 (Tenary operator)

let a = 100 
let b = 50

// if(a > b){
//     console.log('A is greater')
// }
// else {
//     console.log('B is greater')
// }

// Tenary operator
a > b ? console.log('A is greater'):console.log('B is Greater')


//tejashree-3pm 

// tejaswi - 8pm 

// ankita -- 10am