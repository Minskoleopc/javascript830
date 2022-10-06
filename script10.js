// loop
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)


// for loop , while loop
// for(intialization ; conditionCheck ; increment/decrement){
//     // statements
// }


// print 'hello'  5 times

for(let i = 0 ; i < 5 ; i++){ // 1 // 2 // 3 // 4 // 5
    console.log('hello')
     // hello // hello // hello // hello // hello

}

// print 1 to 3
for(let i = 1 ; i <= 3 ; i++){  // 2 // 3 // 4
    console.log(i) // 1 , 2 ,3
}
// print 1 to 10
for(let i = 1 ; i <=10 ; i++){
    console.log(i)
}
// table to 2 
for(let i = 2 ; i <=20 ; i = i + 2){
    console.log(i)
}
// print 10 to 1
for(let i = 10 ; i >= 1 ; i--){
    console.log(i)
}
// break

for(let i = 0 ; i < 5 ; i++){ //1 // 2 // 3
    if(i == 3){
        break;
    }
    console.log(i) // 0 ,1 , 2
}

for(let i = 0 ; i < 5 ; i++){ 
    console.log(i) 
    if(i == 3){
        break;
    }
}

// continue statement loop moves to next iteration
for(let i = 0 ; i < 5 ; i++){ //1 // 2 // 3 // 4 // 5
    if(i > 3){
        continue
    }
    console.log(i) // 0 // 1 // 2 // 4
}

for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2 // 1 // 0
    if(i == 3){
        continue ;
    }
    console.log(i) // 5 // 4 // 2 // 1
}


// -------------------------- for loop----------

//             0         1       2       3       4
let names = ["chinmay","amol","poorva","ram","mayuri"]
for(let i = 0 ; i < names.length ; i++){
    console.log(names[i])
}

for(let i = names.length -1 ; i >= 0 ; i--){
    console.log(names[i])
}
//  0 1 2 3
//  p u n e
let city = "pune"
for(let j = 0 ; j < city.length ; j++){
    //console.log(j)
    console.log(city[j])
}

for(let i = city.length -1 ; i >= 0 ; i--){
   // console.log(i)
   console.log(city[i])
}

// while ---------------------------------------










