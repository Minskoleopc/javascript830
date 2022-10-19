let students  = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        age:34,
        city:"pune",
        skills:["python","javascript","cpp","html"]
    },
    {
        firstName:"poorva", // purva
        lastName:"vyas",
        age:29,
        city:"ujjain",
        skills:["python","django","cpp","html"]
    },

    {
        firstName:"amol",
        lastName:"rao",
        age:32,
        city:"nagpur",
        skills:["sql","javascript","python3","css"]
    },

    {
        firstName:"abhisha",
        lastName:"burande",
        age:25,
        city:"chandrapur",
        skills:["sql","javascript","tableau","css"]
    }

]

console.log(students[0].firstName)
console.log(students[0]['firstName'])
// update name for poorva
students[1].firstName = "purva"
console.log(students[1])

// program 1
// print fullName
for(let i = 0 ; i < students.length ; i++){
    //console.log(i)
    console.log(students[i].firstName + students[i].lastName)
}


//using forEach()
students.forEach(function(el){
    console.log(el.firstName + el.lastName)
    console.log(el['firstName'] + el['lastName'])
})

// program 2
students.forEach(function(el){
    if(el.age > 25){
        console.log(el.firstName + el.lastName)
    }
})



let allAbove25 = students.filter(function(el){
    return el.age > 25
})
console.log(allAbove25) //[obj,obj,obj]
allAbove25.forEach(function(el){
    console.log(el.firstName , el.lastName)
})

// Program3
// sum of ages of all student (avg age)
let sumA = students.reduce(function(acc,el){
    return el.age + acc    // acc ==> 34
},0)
console.log(sumA/students.length)










